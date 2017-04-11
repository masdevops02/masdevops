namespace arkano.taller.api.Controllers
{
    using arkano.taller.core;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/Home")]
    public class HomeController : Controller
    {
        public string GetHome()
        {
            return new Home().Text;
        }
    }
}