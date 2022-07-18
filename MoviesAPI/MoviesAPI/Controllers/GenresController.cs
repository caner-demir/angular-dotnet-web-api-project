using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("api/genres")]
    public class GenresController : ControllerBase
    {
        public GenresController()
        {
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Genre>>> Get()
        {
            return new List<Genre>() { new Genre() { GenreId = 1, Name = "Comedy" } };
        }

        [HttpGet("{id:int}")]
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post(Genre genre)
        {
            throw new NotImplementedException();
        }
    }
}
