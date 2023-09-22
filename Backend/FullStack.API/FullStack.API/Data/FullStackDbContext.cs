using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FullStack.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options)
        {

        }
    
        public DbSet<Employee> Employees { get; set; }

    }
}
