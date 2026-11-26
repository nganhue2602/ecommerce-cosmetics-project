using Microsoft.AspNetCore.Mvc;

namespace Washup.Web.Controllers
{
    public class ReviewDemoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
