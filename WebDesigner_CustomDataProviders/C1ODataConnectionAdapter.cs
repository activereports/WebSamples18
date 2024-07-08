﻿using GrapeCity.ActiveReports.Rendering.Data;
using System.Globalization;

namespace WebDesignerCustomDataProviders
{
	public sealed class C1ODataConnectionAdapter : DbConnectionAdapter
	{
		public static C1ODataConnectionAdapter Instance = new C1ODataConnectionAdapter();

		/// <summary>
		/// Returns the string representation of a multi-value parameter's value.
		/// </summary>
		protected override string MultivalueParameterValueToString(object[] parameterArrayValue)
		{
			return string.Join(",", parameterArrayValue.Select(parameterValue => "'" + Convert.ToString(parameterValue, CultureInfo.InvariantCulture) + "'"));
		}
	}
}
