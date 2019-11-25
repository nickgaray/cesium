/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./Transforms-9a355f42","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-27490d00","./when-c208a7cf","./GeometryAttributes-c3465b51","./AttributeCompression-4cb3e905","./GeometryPipeline-6c73aaa9","./EncodedCartesian3-e4976669","./IndexDatatype-7119db15","./IntersectionTests-dd6b2930","./Plane-c76671c4","./VertexFormat-b4c6d1c2","./arrayRemoveDuplicates-1efed288","./BoundingRectangle-1467e6a9","./EllipsoidTangentPlane-2b3e2af5","./EllipsoidRhumbLine-fb5cc30d","./PolygonPipeline-003684d7","./PolylineVolumeGeometryLibrary-b1c59a5b","./EllipsoidGeodesic-b8e7c0c6","./PolylinePipeline-f76e6a4e"],function(c,e,t,u,r,m,n,A,a,i,D,w,o,R,l,O,s,S,p,d,y,g,f,h,v,B,b,P,E){"use strict";function _(e){var t=(e=u.defaultValue(e,u.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=m.Ellipsoid.clone(u.defaultValue(e.ellipsoid,m.Ellipsoid.WGS84)),this._cornerType=u.defaultValue(e.cornerType,b.CornerType.ROUNDED),this._vertexFormat=y.VertexFormat.clone(u.defaultValue(e.vertexFormat,y.VertexFormat.DEFAULT)),this._granularity=u.defaultValue(e.granularity,r.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";var a=1+t.length*m.Cartesian3.packedLength;a+=1+n.length*m.Cartesian2.packedLength,this.packedLength=a+m.Ellipsoid.packedLength+y.VertexFormat.packedLength+2}_.pack=function(e,t,n){var a;n=u.defaultValue(n,0);var r=e._positions,i=r.length;for(t[n++]=i,a=0;a<i;++a,n+=m.Cartesian3.packedLength)m.Cartesian3.pack(r[a],t,n);var o=e._shape;for(i=o.length,t[n++]=i,a=0;a<i;++a,n+=m.Cartesian2.packedLength)m.Cartesian2.pack(o[a],t,n);return m.Ellipsoid.pack(e._ellipsoid,t,n),n+=m.Ellipsoid.packedLength,y.VertexFormat.pack(e._vertexFormat,t,n),n+=y.VertexFormat.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var k=m.Ellipsoid.clone(m.Ellipsoid.UNIT_SPHERE),C=new y.VertexFormat,V={polylinePositions:void 0,shapePositions:void 0,ellipsoid:k,vertexFormat:C,cornerType:void 0,granularity:void 0};_.unpack=function(e,t,n){var a;t=u.defaultValue(t,0);var r=e[t++],i=new Array(r);for(a=0;a<r;++a,t+=m.Cartesian3.packedLength)i[a]=m.Cartesian3.unpack(e,t);r=e[t++];var o=new Array(r);for(a=0;a<r;++a,t+=m.Cartesian2.packedLength)o[a]=m.Cartesian2.unpack(e,t);var l=m.Ellipsoid.unpack(e,t,k);t+=m.Ellipsoid.packedLength;var s=y.VertexFormat.unpack(e,t,C);t+=y.VertexFormat.packedLength;var p=e[t++],d=e[t];return c.defined(n)?(n._positions=i,n._shape=o,n._ellipsoid=m.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=y.VertexFormat.clone(s,n._vertexFormat),n._cornerType=p,n._granularity=d,n):(V.polylinePositions=i,V.shapePositions=o,V.cornerType=p,V.granularity=d,new _(V))};var L=new f.BoundingRectangle;return _.createGeometry=function(e){var t=e._positions,n=g.arrayRemoveDuplicates(t,m.Cartesian3.equalsEpsilon),a=e._shape;if(a=b.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(a),!(n.length<2||a.length<3)){B.PolygonPipeline.computeWindingOrder2D(a)===B.WindingOrder.CLOCKWISE&&a.reverse();var r=f.BoundingRectangle.fromPoints(a,L);return function(e,t,n,a){var r=new R.GeometryAttributes;a.position&&(r.position=new w.GeometryAttribute({componentDatatype:D.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var i,o,l,s,p,d,c=t.length,u=e.length/3,m=(u-2*c)/(2*c),y=B.PolygonPipeline.triangulate(t),g=(m-1)*c*6+2*y.length,f=S.IndexDatatype.createTypedArray(u,g),h=2*c,v=0;for(i=0;i<m-1;i++){for(o=0;o<c-1;o++)d=(l=2*o+i*c*2)+h,p=(s=l+1)+h,f[v++]=s,f[v++]=l,f[v++]=p,f[v++]=p,f[v++]=l,f[v++]=d;p=(s=(l=2*c-2+i*c*2)+1)+h,d=l+h,f[v++]=s,f[v++]=l,f[v++]=p,f[v++]=p,f[v++]=l,f[v++]=d}if(a.st||a.tangent||a.bitangent){var b,P,E=new Float32Array(2*u),_=1/(m-1),k=1/n.height,C=n.height/2,V=0;for(i=0;i<m;i++){for(b=i*_,P=k*(t[0].y+C),E[V++]=b,E[V++]=P,o=1;o<c;o++)P=k*(t[o].y+C),E[V++]=b,E[V++]=P,E[V++]=b,E[V++]=P;P=k*(t[0].y+C),E[V++]=b,E[V++]=P}for(o=0;o<c;o++)b=0,P=k*(t[o].y+C),E[V++]=b,E[V++]=P;for(o=0;o<c;o++)b=(m-1)*_,P=k*(t[o].y+C),E[V++]=b,E[V++]=P;r.st=new w.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(E)})}var L=u-2*c;for(i=0;i<y.length;i+=3){var F=y[i]+L,T=y[i+1]+L,G=y[i+2]+L;f[v++]=F,f[v++]=T,f[v++]=G,f[v++]=G+c,f[v++]=T+c,f[v++]=F+c}var x=new w.Geometry({attributes:r,indices:f,boundingSphere:A.BoundingSphere.fromVertices(e),primitiveType:w.PrimitiveType.TRIANGLES});if(a.normal&&(x=O.GeometryPipeline.computeNormal(x)),a.tangent||a.bitangent){try{x=O.GeometryPipeline.computeTangentAndBitangent(x)}catch(e){A.oneTimeWarning("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}a.tangent||(x.attributes.tangent=void 0),a.bitangent||(x.attributes.bitangent=void 0),a.st||(x.attributes.st=void 0)}return x}(b.PolylineVolumeGeometryLibrary.computePositions(n,a,r,e,!0),a,r,e._vertexFormat)}},function(e,t){return c.defined(t)&&(e=_.unpack(e,t)),e._ellipsoid=m.Ellipsoid.clone(e._ellipsoid),_.createGeometry(e)}});
