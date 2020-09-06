﻿using Microsoft.EntityFrameworkCore;
using TT.Abp.Cms.Domain;
using Volo.Abp.EntityFrameworkCore;

namespace TT.Abp.Cms.EntityFrameworkCore
{
    public class CmsDbContext : AbpDbContext<CmsDbContext>, ICmsDbContext
    {
        public CmsDbContext(DbContextOptions<CmsDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureCms();
        }

        public DbSet<Category> Categories { get; set; }
    }
}