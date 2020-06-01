using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DotNetCoreArchitecture.Database
{
    public sealed class ContextFactory : IDesignTimeDbContextFactory<Context>
    {
        public Context CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<Context>();

            builder.UseSqlServer("Server=CB\\MSSQLSERVERTEST;Database=DotNetCore;Integrated Security=True;");

            return new Context(builder.Options);
        }
    }
}
