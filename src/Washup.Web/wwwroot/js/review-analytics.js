/* CD28-38 - Dashboard giao diện. Toàn bộ bản ghi sau đây là dữ liệu giả lập. */
(function () {
    'use strict';
    const services = [
        {id:'giat-say-a',name:'Giặt sấy quần áo',shopId:'a',shopName:'Tiệm minh họa A'},
        {id:'giat-hap-b',name:'Giặt hấp',shopId:'b',shopName:'Tiệm minh họa B'},
        {id:'ve-sinh-giay-a',name:'Vệ sinh giày',shopId:'a',shopName:'Tiệm minh họa A'}
    ];
    const demo = [
        ['A','giat-say-a',5,'Approved','2026-11-26'],
        ['B','giat-say-a',4,'Approved','2026-11-25'],
        ['C','giat-say-a',2,'Pending','2026-11-27'],
        ['D','giat-hap-b',4,'Approved','2026-11-24'],
        ['E','giat-hap-b',2,'Approved','2026-11-25'],
        ['F','giat-hap-b',1,'Approved','2026-11-26'],
        ['G','ve-sinh-giay-a',5,'Approved','2026-11-24'],
        ['H','ve-sinh-giay-a',3,'Approved','2026-11-26'],
        ['I','ve-sinh-giay-a',2,'Approved','2026-11-27'],
        ['J','giat-hap-b',5,'Rejected','2026-11-27'],
        ['K','ve-sinh-giay-a',1,'Hidden','2026-11-25'],
        ['L','ve-sinh-giay-a',4,'Pending','2026-11-27']
    ].map(([id,serviceId,rating,status,date])=>({...services.find(s=>s.id===serviceId),id,serviceId,rating,status,date}));
    const statuses = ['Approved','Pending','Rejected','Hidden'];
    const average = rows => rows.length ? rows.reduce((a,r)=>a+r.rating,0)/rows.length : null;
    const format = n => n === null ? '—' : new Intl.NumberFormat('vi-VN',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
    const pct = n => new Intl.NumberFormat('vi-VN',{maximumFractionDigits:1}).format(n)+'%';
    const validRecord = r => r && statuses.includes(r.status) && Number.isInteger(r.rating) && r.rating>=1 && r.rating<=5 && /^\d{4}-\d{2}-\d{2}$/.test(r.date);
    function summarize(records, filters={}) {
        const {shop='',service='',from='',to=''}=filters;
        if(from && to && from>to) throw new Error('Ngày bắt đầu không được sau ngày kết thúc.');
        const scoped=records.filter(r=>validRecord(r)&&(!shop||r.shopId===shop)&&(!service||r.serviceId===service)&&(!from||r.date>=from)&&(!to||r.date<=to));
        const approved=scoped.filter(r=>r.status==='Approved');
        const counts=Object.fromEntries(statuses.map(s=>[s,scoped.filter(r=>r.status===s).length]));
        const distribution=[5,4,3,2,1].map(star=>({star,count:approved.filter(r=>r.rating===star).length}));
        const groups=new Map();const days=new Map();
        for(const r of approved){
            const key=r.shopId+'|'+r.serviceId;
            if(!groups.has(key))groups.set(key,{serviceId:r.serviceId,shopId:r.shopId,name:r.name,shopName:r.shopName,rows:[]});
            groups.get(key).rows.push(r);
            if(!days.has(r.date))days.set(r.date,[]);days.get(r.date).push(r);
        }
        const ranking=[...groups.values()].map(g=>({serviceId:g.serviceId,shopId:g.shopId,name:g.name,shopName:g.shopName,count:g.rows.length,avg:average(g.rows),low:g.rows.filter(r=>r.rating<=2).length}));
        ranking.sort((a,b)=>b.avg-a.avg||b.count-a.count||a.name.localeCompare(b.name,'vi'));
        const lowRanking=ranking.filter(r=>r.low>0).sort((a,b)=>b.low-a.low||(b.low/b.count-a.low/a.count)||a.name.localeCompare(b.name,'vi'));
        const trend=[...days.entries()].sort(([a],[b])=>a.localeCompare(b)).map(([date,rows])=>({date,count:rows.length,avg:average(rows)}));
        return {total:scoped.length,count:approved.length,avg:average(approved),low:approved.filter(r=>r.rating<=2).length,counts,distribution,ranking,lowRanking,trend};
    }
    // Điểm nối dữ liệu: sau khi nhận hợp đồng API chính thức, thay nguồn demo
    // bằng dữ liệu đã chuẩn hóa theo {serviceId,shopId,name,shopName,rating,status,date}.
    // Không tự đặt URL API hoặc giả lập xác thực quyền Admin.
    function mount(root, records=demo, catalog=services){
        const $=id=>root.querySelector('#'+id);
        const set=(id,value)=>{$(id).textContent=value;};
        const make=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
        const empty=(el,msg)=>el.replaceChildren(make('p','rv-empty',msg));
        const addOption=(el,v,t)=>{const option=make('option','',t);option.value=v;el.append(option);};
        const shop=$('rv-shop'),service=$('rv-service'),from=$('rv-from'),to=$('rv-to');
        for(const [id,name] of new Map(catalog.map(s=>[s.shopId,s.shopName])))addOption(shop,id,name);
        function refreshServices(){const prev=service.value;service.replaceChildren();addOption(service,'','Tất cả dịch vụ');for(const s of catalog.filter(s=>!shop.value||s.shopId===shop.value))addOption(service,s.id,s.name+' · '+s.shopName);if([...service.options].some(o=>o.value===prev))service.value=prev;}
        function render(){
            let m;try{m=summarize(records,{shop:shop.value,service:service.value,from:from.value,to:to.value});}catch(e){set('rv-filter-message',e.message);$('rv-filter-message').classList.add('rv-invalid');return;}
            $('rv-filter-message').classList.remove('rv-invalid');set('rv-filter-message','Đã áp dụng · '+m.total+' bản ghi trong phạm vi lọc.');
            const scope=[shop.value?shop.options[shop.selectedIndex].textContent:'Tất cả tiệm',service.value?service.options[service.selectedIndex].textContent:'Tất cả dịch vụ',from.value||to.value?(from.value||'Không giới hạn')+' → '+(to.value||'Không giới hạn'):'Mọi thời gian'];
            set('rv-scope',scope.join(' · '));
            set('rv-hero-average',format(m.avg));set('rv-hero-count',m.count?m.count+' đánh giá đã duyệt':'Chưa có đánh giá đã duyệt');$('rv-stars-fill').style.width=(m.avg===null?0:m.avg/5*100)+'%';$('rv-hero-stars').setAttribute('aria-label',m.avg===null?'Chưa có điểm đánh giá':'Điểm trung bình '+format(m.avg)+' trên 5 sao');
            set('rv-count',m.count);set('rv-average',m.avg===null?'—':format(m.avg)+'/5');set('rv-low',m.low);set('rv-service-count',m.ranking.length);set('rv-distribution-count',m.count+' đã duyệt');
            const alert=$('rv-alert');alert.hidden=m.count>0;alert.textContent=m.total?'Không có đánh giá Approved trong phạm vi lọc.':'Không có dữ liệu phù hợp với bộ lọc.';
            const dist=$('rv-distribution');dist.replaceChildren();if(!m.count)empty(dist,'Chưa có dữ liệu phân bố số sao.');else for(const d of m.distribution){const row=make('div','rv-bar-row');row.append(make('span','',d.star+' ★'));const track=make('div','rv-bar-track'),fill=make('div','rv-bar-fill');const share=d.count/m.count*100;fill.style.width=share+'%';track.append(fill);row.append(track,make('strong','',d.count+' · '+pct(share)));dist.append(row);}
            const trend=$('rv-trend');trend.replaceChildren();if(!m.trend.length)empty(trend,'Chưa có dữ liệu xu hướng.');else {for(const day of m.trend){const row=make('div','rv-trend-row'),date=make('time','',day.date.slice(8,10)+'/'+day.date.slice(5,7));date.dateTime=day.date;date.title=day.date;const track=make('div','rv-trend-track'),fill=make('div','rv-trend-fill');fill.style.width=(day.avg/5*100)+'%';track.append(fill);const value=make('span','rv-trend-value',format(day.avg)+'/5');value.append(make('small','',day.count+' lượt'));row.append(date,track,value);trend.append(row);}trend.append(make('p','rv-trend-note','Mỗi thanh biểu diễn điểm trung bình của một ngày có đánh giá Approved, trên thang 5 sao.'));}
            function renderRanking(el,rows,low){el.replaceChildren();if(!rows.length){empty(el,low?(m.count?'Không có đánh giá 1–2 sao đã duyệt.':'Chưa có dữ liệu để phân tích.'):'Chưa có dịch vụ đủ dữ liệu xếp hạng.');return;}rows.forEach((r,i)=>{const row=make('div','rv-rank-row'+(low?' rv-rank-low':'')),name=make('div','rv-rank-name'),score=make('div','rv-rank-score');name.append(make('strong','',r.name),make('small','',r.shopName+' · '+r.count+' lượt đã duyệt'));score.append(make('strong','',low?r.low+' lượt':format(r.avg)),make('small','',low?pct(r.low/r.count*100):'/5 sao'));row.append(make('span','rv-rank-index',i+1),name,score);el.append(row);});}
            renderRanking($('rv-ranking'),m.ranking,false);renderRanking($('rv-low-ranking'),m.lowRanking,true);
            const colors=['#3769eb','#ffba85','#9aa9be','#59677d'];const legend=$('rv-status-legend');legend.replaceChildren();let start=0;const arcs=[];statuses.forEach((status,i)=>{const end=start+(m.total?m.counts[status]/m.total*100:0);if(end>start)arcs.push(colors[i]+' '+start+'% '+end+'%');start=end;const row=make('div',''),dot=make('span','rv-status-dot');dot.style.background=colors[i];row.append(dot,make('span','',status),make('strong','',m.counts[status]));legend.append(row);});$('rv-donut').style.background=arcs.length?'conic-gradient('+arcs.join(',')+')':'#e7edf6';set('rv-approved-percent',m.total?pct(m.count/m.total*100):'—');$('rv-donut').setAttribute('aria-label',statuses.map(s=>s+': '+m.counts[s]).join(', '));set('rv-status-total','Tổng '+m.total+' bản ghi thuộc mọi trạng thái. Chỉ '+m.count+' Approved tham gia thống kê chất lượng.');
        }
        shop.addEventListener('change',refreshServices);
        $('rv-filters').addEventListener('submit',e=>{e.preventDefault();render();});
        $('rv-reset').addEventListener('click',()=>{shop.value='';refreshServices();service.value='';from.value='';to.value='';render();});
        refreshServices();render();
    }
    if(typeof module==='object'&&module.exports)module.exports={summarize,demo,services};
    if(typeof document!=='undefined')document.addEventListener('DOMContentLoaded',()=>{const root=document.getElementById('review-analytics');if(root)mount(root);});
})();
