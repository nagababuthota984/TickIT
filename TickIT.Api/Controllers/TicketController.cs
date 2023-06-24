using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TickIT.Core;

namespace TickIT.Api.Controllers
{
    [Route("api")]
    [ApiController]
    [Authorize]
    public class TicketController : BaseController
    {
        [HttpGet("tickets")]
        public IActionResult GetAll()
        {
            HostService hostService = HttpContext.RequestServices.GetService<HostService>();

            return Ok();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
