﻿using System;
using System.Globalization;
using System.Windows.Data;
using System.Windows.Media;
namespace TickIT.App.Converters
{
    public class DueDateToColorConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value is DateTime dueDate && dueDate < DateTime.Now
                ? new SolidColorBrush(Colors.Red)
                : new SolidColorBrush(Colors.Green);
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}