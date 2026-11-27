
using Microsoft.AspNetCore.Mvc;

namespace Washup.Web.Controllers
{
    public class ReviewPreviewController : Controller
    {
        // Xem thử trang chi tiết dịch vụ và đánh giá
        public IActionResult Index()
        {
            return View("~/Views/Services/Detail.cshtml");
        }

        // Xem thử Dashboard thống kê đánh giá
        public IActionResult Analytics()
        {
            return View("~/Views/AdminReviews/Analytics.cshtml");
        }
    }
}
