
using Microsoft.AspNetCore.Mvc;

namespace Washup.Web.Controllers
{
    public class ReviewPreviewController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Services/Detail.cshtml");
        }
    }
}
