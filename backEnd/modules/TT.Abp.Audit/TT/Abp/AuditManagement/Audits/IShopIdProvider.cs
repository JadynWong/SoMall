﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Volo.Abp.DependencyInjection;

namespace TT.Abp.AuditManagement.Audits
{
    public interface IShopIdProvider : ITransientDependency
    {
        Task<Guid?> GetCurrentShopId();
    }

    public class ShopIdHeaderProvider
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ShopIdHeaderProvider(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<Guid?> GetCurrentShopId()
        {
            var id = _httpContextAccessor?.HttpContext?.Request?.Headers["__ShopId"].FirstOrDefault();

            if (id == null)
            {
                return null;
            }

            return await Task.FromResult(new Guid(id));
        }
    }
}