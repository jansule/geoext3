Ext.data.JsonP.GeoExt_util_OGCFilter({"tagname":"class","name":"GeoExt.util.OGCFilter","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"OGCFilter.js","href":"OGCFilter.html#GeoExt-util-OGCFilter"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"filter20StartElementStr","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-filter20StartElementStr","meta":{"static":true}},{"name":"gml32LineStringTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-gml32LineStringTpl","meta":{"static":true}},{"name":"gml32PointTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-gml32PointTpl","meta":{"static":true}},{"name":"gml32PolygonTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-gml32PolygonTpl","meta":{"static":true}},{"name":"spatialFilterBBoxTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-spatialFilterBBoxTpl","meta":{"static":true}},{"name":"spatialFilterWfs1xXmlTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-spatialFilterWfs1xXmlTpl","meta":{"static":true}},{"name":"spatialFilterWfs2xXmlTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-spatialFilterWfs2xXmlTpl","meta":{"static":true}},{"name":"topologicalOrSpatialFilterOperators","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-topologicalOrSpatialFilterOperators","meta":{"static":true}},{"name":"wfs100GetFeatureXmlTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-wfs100GetFeatureXmlTpl","meta":{"static":true}},{"name":"wfs110GetFeatureXmlTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-wfs110GetFeatureXmlTpl","meta":{"static":true}},{"name":"wfs200GetFeatureXmlTpl","tagname":"property","owner":"GeoExt.util.OGCFilter","id":"static-property-wfs200GetFeatureXmlTpl","meta":{"static":true}},{"name":"buildWfsGetFeatureWithFilter","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-buildWfsGetFeatureWithFilter","meta":{"static":true}},{"name":"combineFilterBodies","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-combineFilterBodies","meta":{"static":true}},{"name":"combineFilters","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-combineFilters","meta":{"static":true}},{"name":"createSpatialFilter","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-createSpatialFilter","meta":{"static":true}},{"name":"flattenCoordinates","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-flattenCoordinates","meta":{"static":true}},{"name":"getGmlElementForGeometry","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-getGmlElementForGeometry","meta":{"static":true}},{"name":"getOgcFilter","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-getOgcFilter","meta":{"static":true}},{"name":"getOgcFilterBodyFromExtJsFilterObject","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-getOgcFilterBodyFromExtJsFilterObject","meta":{"static":true}},{"name":"getOgcFilterFromExtJsFilter","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-getOgcFilterFromExtJsFilter","meta":{"static":true}},{"name":"getOgcWfsFilterFromExtJsFilter","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-getOgcWfsFilterFromExtJsFilter","meta":{"static":true}},{"name":"getOgcWmsFilterFromExtJsFilter","tagname":"method","owner":"GeoExt.util.OGCFilter","id":"static-method-getOgcWmsFilterFromExtJsFilter","meta":{"static":true}}],"code_type":"ext_define","id":"class-GeoExt.util.OGCFilter","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":["GeoExt.data.store.WfsFeatures"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>GeoExt.util.OGCFilter</strong></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/GeoExt.data.store.WfsFeatures' rel='GeoExt.data.store.WfsFeatures' class='docClass'>GeoExt.data.store.WfsFeatures</a></div><h4>Files</h4><div class='dependency'><a href='source/OGCFilter.html#GeoExt-util-OGCFilter' target='_blank'>OGCFilter.js</a></div></pre><div class='doc-contents'><p>A utility class for converting ExtJS filters to OGC compliant filters</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-filter20StartElementStr' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-filter20StartElementStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-filter20StartElementStr' class='name expandable'>filter20StartElementStr</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The start element for a FE filter instance in version 2.0\nas string value ...</div><div class='long'><p>The start element for a FE filter instance in version 2.0\nas string value</p>\n<p>Defaults to: <code>&#39;&lt;fes:Filter &#39; + &#39;xsi:schemaLocation=&quot;http://www.opengis.net/fes/2.0 &#39; + &#39;http://schemas.opengis.net/filter/2.0/filterAll.xsd &#39; + &#39;http://www.opengis.net/gml/3.2 &#39; + &#39;http://schemas.opengis.net/gml/3.2.1/gml.xsd&quot; &#39; + &#39;xmlns:fes=&quot;http://www.opengis.net/fes/2.0&quot; &#39; + &#39;xmlns:gml=&quot;http://www.opengis.net/gml/3.2&quot; &#39; + &#39;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;&#39;</code></p></div></div></div><div id='static-property-gml32LineStringTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-gml32LineStringTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-gml32LineStringTpl' class='name expandable'>gml32LineStringTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Template string for GML 3.2.1 linestring ...</div><div class='long'><p>Template string for GML 3.2.1 linestring</p>\n<p>Defaults to: <code>&#39;&lt;gml:LineString gml:id=&quot;L1&quot; &#39; + &#39;srsName=&quot;urn:ogc:def:crs:{0}&quot; srsDimension=&quot;2&quot;&gt;&#39; + &#39;&lt;gml:posList&gt;{1}&lt;/gml:posList&gt;&#39; + &#39;&lt;/gml:LineString&gt;&#39;</code></p></div></div></div><div id='static-property-gml32PointTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-gml32PointTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-gml32PointTpl' class='name expandable'>gml32PointTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Template string for GML 3.2.1 point ...</div><div class='long'><p>Template string for GML 3.2.1 point</p>\n<p>Defaults to: <code>&#39;&lt;gml:Point gml:id=&quot;Pt1&quot; &#39; + &#39;srsName=&quot;urn:ogc:def:crs:{0}&quot; srsDimension=&quot;2&quot;&gt;&#39; + &#39;&lt;gml:pos&gt;{1}&lt;/gml:pos&gt;&#39; + &#39;&lt;/gml:Point&gt;&#39;</code></p></div></div></div><div id='static-property-gml32PolygonTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-gml32PolygonTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-gml32PolygonTpl' class='name expandable'>gml32PolygonTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Template string for GML 3.2.1 polygon ...</div><div class='long'><p>Template string for GML 3.2.1 polygon</p>\n<p>Defaults to: <code>&#39;&lt;gml:Polygon gml:id=&quot;P1&quot; &#39; + &#39;srsName=&quot;urn:ogc:def:crs:{0}&quot; srsDimension=&quot;2&quot;&gt;&#39; + &#39;&lt;gml:exterior&gt;&#39; + &#39;&lt;gml:LinearRing&gt;&#39; + &#39;&lt;gml:posList&gt;{1}&lt;/gml:posList&gt;&#39; + &#39;&lt;/gml:LinearRing&gt;&#39; + &#39;&lt;/gml:exterior&gt;&#39; + &#39;&lt;/gml:Polygon&gt;&#39;</code></p></div></div></div><div id='static-property-spatialFilterBBoxTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-spatialFilterBBoxTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-spatialFilterBBoxTpl' class='name expandable'>spatialFilterBBoxTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The template for spatial bbox filters used in WFS 1.x.0 queries ...</div><div class='long'><p>The template for spatial bbox filters used in WFS 1.x.0 queries</p>\n<p>Defaults to: <code>&#39;&lt;BBOX&gt;&#39; + &#39;    &lt;PropertyName&gt;{0}&lt;/PropertyName&gt;&#39; + &#39;    &lt;gml:Envelope&#39; + &#39;        xmlns:gml=&quot;http://www.opengis.net/gml&quot; srsName=&quot;{1}&quot;&gt;&#39; + &#39;        &lt;gml:lowerCorner&gt;{2} {3}&lt;/gml:lowerCorner&gt;&#39; + &#39;        &lt;gml:upperCorner&gt;{4} {5}&lt;/gml:upperCorner&gt;&#39; + &#39;    &lt;/gml:Envelope&gt;&#39; + &#39;&lt;/BBOX&gt;&#39;</code></p></div></div></div><div id='static-property-spatialFilterWfs1xXmlTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-spatialFilterWfs1xXmlTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-spatialFilterWfs1xXmlTpl' class='name expandable'>spatialFilterWfs1xXmlTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The template for spatial filters used in WFS 1.x.0 queries ...</div><div class='long'><p>The template for spatial filters used in WFS 1.x.0 queries</p>\n<p>Defaults to: <code>&#39;&lt;{0}&gt;&#39; + &#39;&lt;PropertyName&gt;{1}&lt;/PropertyName&gt;&#39; + &#39;{2}&#39; + &#39;&lt;/{0}&gt;&#39;</code></p></div></div></div><div id='static-property-spatialFilterWfs2xXmlTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-spatialFilterWfs2xXmlTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-spatialFilterWfs2xXmlTpl' class='name expandable'>spatialFilterWfs2xXmlTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The template for spatial filters used in WFS 2.0.0 queries ...</div><div class='long'><p>The template for spatial filters used in WFS 2.0.0 queries</p>\n<p>Defaults to: <code>&#39;&lt;fes:{0}&gt;&#39; + &#39;&lt;fes:ValueReference&gt;{1}&lt;/fes:ValueReference&gt;&#39; + &#39;{2}&#39; + &#39;&lt;/fes:{0}&gt;&#39;</code></p></div></div></div><div id='static-property-topologicalOrSpatialFilterOperators' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-topologicalOrSpatialFilterOperators' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-topologicalOrSpatialFilterOperators' class='name expandable'>topologicalOrSpatialFilterOperators</a> : Array<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The list of supported topological and spatial filter operators ...</div><div class='long'><p>The list of supported topological and spatial filter operators</p>\n<p>Defaults to: <code>[&#39;intersect&#39;, &#39;within&#39;, &#39;contains&#39;, &#39;equals&#39;, &#39;disjoint&#39;, &#39;crosses&#39;, &#39;touches&#39;, &#39;overlaps&#39;, &#39;bbox&#39;]</code></p></div></div></div><div id='static-property-wfs100GetFeatureXmlTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-wfs100GetFeatureXmlTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-wfs100GetFeatureXmlTpl' class='name expandable'>wfs100GetFeatureXmlTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The WFS 1.0.0 GetFeature XML body template ...</div><div class='long'><p>The WFS 1.0.0 GetFeature XML body template</p>\n<p>Defaults to: <code>&#39;&lt;wfs:GetFeature service=&quot;WFS&quot; version=&quot;1.0.0&quot;&#39; + &#39; outputFormat=&quot;JSON&quot;&#39; + &#39; xmlns:wfs=&quot;http://www.opengis.net/wfs&quot;&#39; + &#39; xmlns=&quot;http://www.opengis.net/ogc&quot;&#39; + &#39; xmlns:gml=&quot;http://www.opengis.net/gml&quot;&#39; + &#39; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&#39; + &#39; xsi:schemaLocation=&quot;http://www.opengis.net/wfs&#39; + &#39; http://schemas.opengis.net/wfs/1.0.0/WFS-basic.xsd&quot;&gt;&#39; + &#39;&lt;wfs:Query typeName=&quot;{0}&quot;&gt;{1}&#39; + &#39;&lt;/wfs:Query&gt;&#39; + &#39;&lt;/wfs:GetFeature&gt;&#39;</code></p></div></div></div><div id='static-property-wfs110GetFeatureXmlTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-wfs110GetFeatureXmlTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-wfs110GetFeatureXmlTpl' class='name expandable'>wfs110GetFeatureXmlTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The WFS 1.1.0 GetFeature XML body template ...</div><div class='long'><p>The WFS 1.1.0 GetFeature XML body template</p>\n<p>Defaults to: <code>&#39;&lt;wfs:GetFeature service=&quot;WFS&quot; version=&quot;1.1.0&quot;&#39; + &#39; outputFormat=&quot;JSON&quot;&#39; + &#39; xmlns:wfs=&quot;http://www.opengis.net/wfs&quot;&#39; + &#39; xmlns=&quot;http://www.opengis.net/ogc&quot;&#39; + &#39; xmlns:gml=&quot;http://www.opengis.net/gml&quot;&#39; + &#39; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&#39; + &#39; xsi:schemaLocation=&quot;http://www.opengis.net/wfs&#39; + &#39; http://schemas.opengis.net/wfs/1.0.0/WFS-basic.xsd&quot;&gt;&#39; + &#39;&lt;wfs:Query typeName=&quot;{0}&quot;&gt;{1}&#39; + &#39;&lt;/wfs:Query&gt;&#39; + &#39;&lt;/wfs:GetFeature&gt;&#39;</code></p></div></div></div><div id='static-property-wfs200GetFeatureXmlTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-property-wfs200GetFeatureXmlTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-property-wfs200GetFeatureXmlTpl' class='name expandable'>wfs200GetFeatureXmlTpl</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The WFS 2.0.0 GetFeature XML body template ...</div><div class='long'><p>The WFS 2.0.0 GetFeature XML body template</p>\n<p>Defaults to: <code>&#39;&lt;wfs:GetFeature service=&quot;WFS&quot; version=&quot;2.0.0&quot; &#39; + &#39;xmlns:wfs=&quot;http://www.opengis.net/wfs/2.0&quot; &#39; + &#39;xmlns:fes=&quot;http://www.opengis.net/fes/2.0&quot; &#39; + &#39;xmlns:gml=&quot;http://www.opengis.net/gml/3.2&quot; &#39; + &#39;xmlns:sf=&quot;http://www.openplans.org/spearfish&quot; &#39; + &#39;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; &#39; + &#39;xsi:schemaLocation=&quot;http://www.opengis.net/wfs/2.0 &#39; + &#39;http://schemas.opengis.net/wfs/2.0/wfs.xsd &#39; + &#39;http://www.opengis.net/gml/3.2 &#39; + &#39;http://schemas.opengis.net/gml/3.2.1/gml.xsd&quot;&gt;&#39; + &#39;&lt;wfs:Query typeName=&quot;{0}&quot;&gt;{1}&#39; + &#39;&lt;/wfs:Query&gt;&#39; + &#39;&lt;/wfs:GetFeature&gt;&#39;</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-buildWfsGetFeatureWithFilter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-buildWfsGetFeatureWithFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-buildWfsGetFeatureWithFilter' class='name expandable'>buildWfsGetFeatureWithFilter</a>( <span class='pre'>filters, combinator, wfsVersion, typeName</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a GetFeature XML body containing the filters\nwhich can be used to directly request the features ...</div><div class='long'><p>Returns a GetFeature XML body containing the filters\nwhich can be used to directly request the features</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Ext.util.Filter[]<div class='sub-desc'><p>array containing all\n  <code>Ext.util.Filter</code> that should be converted</p>\n</div></li><li><span class='pre'>combinator</span> : string<div class='sub-desc'><p>The combinator used for combining multiple\n  filters. Can be 'and' or 'or'</p>\n</div></li><li><span class='pre'>wfsVersion</span> : string<div class='sub-desc'><p>The WFS version to use, either <code>1.0.0</code>,\n  <code>1.1.0</code> or <code>2.0.0</code></p>\n</div></li><li><span class='pre'>typeName</span> : string<div class='sub-desc'><p>The featuretype name to be used</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>the GetFeature XML body as string</p>\n</div></li></ul></div></div></div><div id='static-method-combineFilterBodies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-combineFilterBodies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-combineFilterBodies' class='name expandable'>combineFilterBodies</a>( <span class='pre'>filterBodies, combinator, wfsVersion</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Combines the passed filter bodies with an &lt;And&gt; or &lt;Or&gt; and\nreturns them. ...</div><div class='long'><p>Combines the passed filter bodies with an <code>&lt;And&gt;</code> or <code>&lt;Or&gt;</code> and\nreturns them. E.g. created with\n<a href=\"#!/api/GeoExt.util.OGCFilter-static-method-getOgcFilterBodyFromExtJsFilterObject\" rel=\"GeoExt.util.OGCFilter-static-method-getOgcFilterBodyFromExtJsFilterObject\" class=\"docClass\">GeoExt.util.OGCFilter.getOgcFilterBodyFromExtJsFilterObject</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterBodies</span> : Array<div class='sub-desc'><p>The filter bodies to join.</p>\n</div></li><li><span class='pre'>combinator</span> : string<div class='sub-desc'><p>The combinator to use, should be\n    either <code>And</code> (the default) or <code>Or</code>.</p>\n</div></li><li><span class='pre'>wfsVersion</span> : string<div class='sub-desc'><p>The WFS version to use, either <code>1.0.0</code>,\n  <code>1.1.0</code> or <code>2.0.0</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>And/Or combined OGC filter bodies.</p>\n</div></li></ul></div></div></div><div id='static-method-combineFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-combineFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-combineFilters' class='name expandable'>combineFilters</a>( <span class='pre'>filters, combinator, omitNamespaces, wfsVersion</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Combines the passed filters with an &lt;And&gt; or &lt;Or&gt; and\nreturns them. ...</div><div class='long'><p>Combines the passed filters with an <code>&lt;And&gt;</code> or <code>&lt;Or&gt;</code> and\nreturns them.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Array<div class='sub-desc'><p>The filters to join.</p>\n</div></li><li><span class='pre'>combinator</span> : string<div class='sub-desc'><p>The combinator to use, should be\n    either <code>And</code> (the default) or <code>Or</code>.</p>\n</div></li><li><span class='pre'>omitNamespaces</span> : boolean<div class='sub-desc'><p>Indicates if namespaces\n  should be omitted in filters, which is useful for WMS</p>\n</div></li><li><span class='pre'>wfsVersion</span> : string<div class='sub-desc'><p>The WFS version to use, either <code>1.0.0</code>,\n  <code>1.1.0</code> or <code>2.0.0</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>An combined OGC filter with the passed filters.</p>\n</div></li></ul></div></div></div><div id='static-method-createSpatialFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-createSpatialFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-createSpatialFilter' class='name expandable'>createSpatialFilter</a>( <span class='pre'>operator, typeName, value, srsName</span> ) : Ext.util.Filter<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create an instance of {Ext.util.Filter} that contains the required\ninformation on spatial filter, e.g. ...</div><div class='long'><p>Create an instance of {Ext.util.Filter} that contains the required\ninformation on spatial filter, e.g. operator and geometry</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operator</span> : string<div class='sub-desc'><p>The spatial / toplogical operator</p>\n</div></li><li><span class='pre'>typeName</span> : string<div class='sub-desc'><p>The name of geometry field</p>\n</div></li><li><span class='pre'>value</span> : ol.geom.Geometry<div class='sub-desc'><p>The geometry to use for filtering</p>\n</div></li><li><span class='pre'>srsName</span> : string<div class='sub-desc'><p>The EPSG code of the geometry</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.util.Filter</span><div class='sub-desc'><p>A 'spatial' {Ext.util.Filter}</p>\n</div></li></ul></div></div></div><div id='static-method-flattenCoordinates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-flattenCoordinates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-flattenCoordinates' class='name expandable'>flattenCoordinates</a>( <span class='pre'>coordArray</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Reduce an ol.Coordinate array to a string of whitespace\nseparated coordinate values ...</div><div class='long'><p>Reduce an ol.Coordinate array to a string of whitespace\nseparated coordinate values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>coordArray</span> : ol.Coordinate []<div class='sub-desc'><p>An array of\ncoordinates</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>Concatenated array of coordinates</p>\n</div></li></ul></div></div></div><div id='static-method-getGmlElementForGeometry' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-getGmlElementForGeometry' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-getGmlElementForGeometry' class='name expandable'>getGmlElementForGeometry</a>( <span class='pre'>geometry, srsName, wfsVersion</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a serialized geometry in GML3 format ...</div><div class='long'><p>Returns a serialized geometry in GML3 format</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>geometry</span> : ol.geometry.Geometry<div class='sub-desc'><p>The geometry to serialize</p>\n</div></li><li><span class='pre'>srsName</span> : String<div class='sub-desc'><p>The epsg code to use to serialization</p>\n</div></li><li><span class='pre'>wfsVersion</span> : String<div class='sub-desc'><p>The WFS version to use (WFS 2.0.0\nrequires gml prefix for geometries)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The serialized geometry in GML3 format</p>\n</div></li></ul></div></div></div><div id='static-method-getOgcFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-getOgcFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-getOgcFilter' class='name expandable'>getOgcFilter</a>( <span class='pre'>property, operator, value, wfsVersion, srsName</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns an OGC filter for the given parameters. ...</div><div class='long'><p>Returns an OGC filter for the given parameters.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : string<div class='sub-desc'><p>The property to filter on</p>\n</div></li><li><span class='pre'>operator</span> : string<div class='sub-desc'><p>The operator to use</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>The value for the filter</p>\n</div></li><li><span class='pre'>wfsVersion</span> : string<div class='sub-desc'><p>The WFS version to use, either <code>1.0.0</code>,\n  <code>1.1.0</code> or <code>2.0.0</code></p>\n</div></li><li><span class='pre'>srsName</span> : string<div class='sub-desc'><p>The code for the projection</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The OGC filter.</p>\n</div></li></ul></div></div></div><div id='static-method-getOgcFilterBodyFromExtJsFilterObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-getOgcFilterBodyFromExtJsFilterObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-getOgcFilterBodyFromExtJsFilterObject' class='name expandable'>getOgcFilterBodyFromExtJsFilterObject</a>( <span class='pre'>filter, wfsVersion</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Converts given ExtJS grid-filter to an OGC compliant filter\nbody content. ...</div><div class='long'><p>Converts given ExtJS grid-filter to an OGC compliant filter\nbody content.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : Ext.util.Filter<div class='sub-desc'><p>Instance of\n  <code>Ext.util.Filter</code> which should be converted to OGC filter</p>\n</div></li><li><span class='pre'>wfsVersion</span> : string<div class='sub-desc'><p>The WFS version to use, either <code>1.0.0</code>,\n  <code>1.1.0</code> or <code>2.0.0</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The OGC Filter body as XML String</p>\n</div></li></ul></div></div></div><div id='static-method-getOgcFilterFromExtJsFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-getOgcFilterFromExtJsFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-getOgcFilterFromExtJsFilter' class='name expandable'>getOgcFilterFromExtJsFilter</a>( <span class='pre'>filters, type, combinator, wfsVersion</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Given an ExtJS grid-filter, this method will return an OGC compliant\nfilter which can be used for WMS or WFS queries ...</div><div class='long'><p>Given an ExtJS grid-filter, this method will return an OGC compliant\nfilter which can be used for WMS or WFS queries</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Ext.util.Filter[]<div class='sub-desc'><p>array containing all\n  <code>Ext.util.Filter</code> that should be converted</p>\n</div></li><li><span class='pre'>type</span> : string<div class='sub-desc'><p>The OGC type we will be using, can be\n  <code>wms</code> or <code>wfs</code></p>\n</div></li><li><span class='pre'>combinator</span> : string<div class='sub-desc'><p>The combinator used for combining multiple\n  filters. Can be 'and' or 'or'</p>\n</div></li><li><span class='pre'>wfsVersion</span> : string<div class='sub-desc'><p>The WFS version to use, either <code>1.0.0</code>,\n  <code>1.1.0</code> or <code>2.0.0</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The OGC Filter as XML String</p>\n</div></li></ul></div></div></div><div id='static-method-getOgcWfsFilterFromExtJsFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-getOgcWfsFilterFromExtJsFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-getOgcWfsFilterFromExtJsFilter' class='name expandable'>getOgcWfsFilterFromExtJsFilter</a>( <span class='pre'>filters, combinator, wfsVersion</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Given an array of ExtJS grid-filters, this method will return an OGC\ncompliant filter which can be used for WFS requests ...</div><div class='long'><p>Given an array of ExtJS grid-filters, this method will return an OGC\ncompliant filter which can be used for WFS requests</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Ext.util.Filter[]<div class='sub-desc'><p>array containing all\n  <code>Ext.util.Filter</code> that should be converted</p>\n</div></li><li><span class='pre'>combinator</span> : string<div class='sub-desc'><p>The combinator used for combining multiple\n  filters. Can be 'and' or 'or'</p>\n</div></li><li><span class='pre'>wfsVersion</span> : string<div class='sub-desc'><p>The WFS version to use, either <code>1.0.0</code>,\n  <code>1.1.0</code> or <code>2.0.0</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The OGC Filter XML</p>\n</div></li></ul></div></div></div><div id='static-method-getOgcWmsFilterFromExtJsFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.util.OGCFilter'>GeoExt.util.OGCFilter</span><br/><a href='source/OGCFilter.html#GeoExt-util-OGCFilter-static-method-getOgcWmsFilterFromExtJsFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.util.OGCFilter-static-method-getOgcWmsFilterFromExtJsFilter' class='name expandable'>getOgcWmsFilterFromExtJsFilter</a>( <span class='pre'>filters, combinator</span> ) : string<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Given an array of ExtJS grid-filters, this method will return an OGC\ncompliant filter which can be used for WMS requests ...</div><div class='long'><p>Given an array of ExtJS grid-filters, this method will return an OGC\ncompliant filter which can be used for WMS requests</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Ext.util.Filter[]<div class='sub-desc'><p>array containing all\n  <code>Ext.util.Filter</code> that should be converted</p>\n</div></li><li><span class='pre'>combinator</span> : string<div class='sub-desc'><p>The combinator used for combining multiple\n  filters. Can be 'and' or 'or'</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The OGC Filter XML</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});