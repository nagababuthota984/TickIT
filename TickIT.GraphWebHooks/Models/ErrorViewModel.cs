// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

namespace TickIT.GraphWebhooks.Models
{
    /// <summary>
    /// View model used by the error page
    /// </summary>
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
