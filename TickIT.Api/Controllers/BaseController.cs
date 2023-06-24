using Microsoft.AspNetCore.Mvc;
using TickIT.Core;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TickIT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        public readonly HostService _hostService;
        public BaseController()
        {
        }
    }
}
