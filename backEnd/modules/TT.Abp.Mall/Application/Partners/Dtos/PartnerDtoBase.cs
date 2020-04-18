﻿using System;
using Volo.Abp.Application.Dtos;

namespace TT.Abp.Mall.Application.Partners
{
    public class PartnerDtoBase : EntityDto
    {
        Guid UserId { get; set; }

        public string RealName { get; set; }

        public string Phone { get; set; }

        public string Nickname { get; set; }

        public string HeadImageUrl { get; set; }

        /// <summary>
        /// 可用余额
        /// </summary>
        public virtual decimal AvblBalance { get; set; }

        /// <summary>
        /// 不可用余额
        /// </summary>
        public virtual decimal UnavblBalance { get; set; }
    }
}