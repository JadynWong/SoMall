﻿using System;
using Volo.Abp.Application.Dtos;

namespace TT.Abp.Mall.Application.Coupons.Dtos
{
    public class CouponResultRequestDto : PagedAndSortedResultRequestDto
    {
        public Guid? CouponId { get; set; }
    }
}