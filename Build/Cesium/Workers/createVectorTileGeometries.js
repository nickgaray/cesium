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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./Transforms-9a355f42","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-27490d00","./when-c208a7cf","./GeometryAttributes-c3465b51","./IndexDatatype-7119db15","./createTaskProcessorWorker","./GeometryOffsetAttribute-0abfa3f6","./VertexFormat-b4c6d1c2","./BoxGeometry-a99c959f","./CylinderGeometryLibrary-1a232241","./CylinderGeometry-06dc0aac","./EllipsoidGeometry-e3a55ca5","./Color-aa7ce913"],function(F,e,t,a,n,R,r,P,i,o,d,s,c,f,Z,l,u,h,D,b,q,W,S){"use strict";function V(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var p=new R.Cartesian3,y=P.Matrix4.packedLength+R.Cartesian3.packedLength,x=P.Matrix4.packedLength+2,g=P.Matrix4.packedLength+R.Cartesian3.packedLength,v=R.Cartesian3.packedLength+1,C={modelMatrix:new P.Matrix4,boundingVolume:new P.BoundingSphere};function _(e,t){var a=t*y,n=R.Cartesian3.unpack(e,a,p);a+=R.Cartesian3.packedLength;var r=P.Matrix4.unpack(e,a,C.modelMatrix);P.Matrix4.multiplyByScale(r,n,r);var i=C.boundingVolume;return R.Cartesian3.clone(R.Cartesian3.ZERO,i.center),i.radius=Math.sqrt(3),C}function j(e,t){var a=t*x,n=e[a++],r=e[a++],i=R.Cartesian3.fromElements(n,n,r,p),o=P.Matrix4.unpack(e,a,C.modelMatrix);P.Matrix4.multiplyByScale(o,i,o);var d=C.boundingVolume;return R.Cartesian3.clone(R.Cartesian3.ZERO,d.center),d.radius=Math.sqrt(2),C}function z(e,t){var a=t*g,n=R.Cartesian3.unpack(e,a,p);a+=R.Cartesian3.packedLength;var r=P.Matrix4.unpack(e,a,C.modelMatrix);P.Matrix4.multiplyByScale(r,n,r);var i=C.boundingVolume;return R.Cartesian3.clone(R.Cartesian3.ZERO,i.center),i.radius=1,C}function N(e,t){var a=t*v,n=e[a++],r=R.Cartesian3.unpack(e,a,p),i=P.Matrix4.fromTranslation(r,C.modelMatrix);P.Matrix4.multiplyByUniformScale(i,n,i);var o=C.boundingVolume;return R.Cartesian3.clone(R.Cartesian3.ZERO,o.center),o.radius=1,C}var T=new R.Cartesian3;function Y(e,t,a,n,r){if(F.defined(t)){for(var i=a.length,o=n.attributes.position.values,d=n.indices,s=e.positions,c=e.vertexBatchIds,f=e.indices,l=e.batchIds,u=e.batchTableColors,h=e.batchedIndices,b=e.indexOffsets,p=e.indexCounts,y=e.boundingVolumes,x=e.modelMatrix,g=e.center,v=e.positionOffset,C=e.batchIdIndex,m=e.indexOffset,I=e.batchedIndicesOffset,k=0;k<i;++k){var M=r(t,k),B=M.modelMatrix;P.Matrix4.multiply(x,B,B);for(var w=a[k],A=o.length,O=0;O<A;O+=3){var L=R.Cartesian3.unpack(o,O,T);P.Matrix4.multiplyByPoint(B,L,L),R.Cartesian3.subtract(L,g,L),R.Cartesian3.pack(L,s,3*v+O),c[C++]=w}for(var E=d.length,U=0;U<E;++U)f[m+U]=d[U]+v;var G=k+I;h[G]=new V({offset:m,count:E,color:S.Color.fromRgba(u[w]),batchIds:[w]}),l[G]=w,b[G]=m,p[G]=E,y[G]=P.BoundingSphere.transform(M.boundingVolume,B),v+=A/3,m+=E}e.positionOffset=v,e.batchIdIndex=C,e.indexOffset=m,e.batchedIndicesOffset+=i}}var H=new R.Cartesian3,J=new P.Matrix4;function K(e,t,a){var n=a.length,r=2+n*P.BoundingSphere.packedLength+1+function(e){for(var t=e.length,a=0,n=0;n<t;++n)a+=S.Color.packedLength+3+e[n].batchIds.length;return a}(t),i=new Float64Array(r),o=0;i[o++]=e,i[o++]=n;for(var d=0;d<n;++d)P.BoundingSphere.pack(a[d],i,o),o+=P.BoundingSphere.packedLength;var s=t.length;i[o++]=s;for(var c=0;c<s;++c){var f=t[c];S.Color.pack(f.color,i,o),o+=S.Color.packedLength,i[o++]=f.offset,i[o++]=f.count;var l=f.batchIds,u=l.length;i[o++]=u;for(var h=0;h<u;++h)i[o++]=l[h]}return i}return l(function(e,t){var a=F.defined(e.boxes)?new Float32Array(e.boxes):void 0,n=F.defined(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,r=F.defined(e.cylinders)?new Float32Array(e.cylinders):void 0,i=F.defined(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,o=F.defined(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,d=F.defined(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,s=F.defined(e.spheres)?new Float32Array(e.spheres):void 0,c=F.defined(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,f=F.defined(a)?n.length:0,l=F.defined(r)?i.length:0,u=F.defined(o)?d.length:0,h=F.defined(s)?c.length:0,b=D.BoxGeometry.getUnitBox(),p=q.CylinderGeometry.getUnitCylinder(),y=W.EllipsoidGeometry.getUnitEllipsoid(),x=b.attributes.position.values,g=p.attributes.position.values,v=y.attributes.position.values,C=x.length*f;C+=g.length*l,C+=v.length*(u+h);var m=b.indices,I=p.indices,k=y.indices,M=m.length*f;M+=I.length*l,M+=k.length*(u+h);var B=new Float32Array(C),w=new Uint16Array(C/3),A=Z.IndexDatatype.createTypedArray(C/3,M),O=f+l+u+h,L=new Uint16Array(O),E=new Array(O),U=new Uint32Array(O),G=new Uint32Array(O),S=new Array(O);!function(e){var t=new Float64Array(e),a=0;R.Cartesian3.unpack(t,a,H),a+=R.Cartesian3.packedLength,P.Matrix4.unpack(t,a,J)}(e.packedBuffer);var V={batchTableColors:new Uint32Array(e.batchTableColors),positions:B,vertexBatchIds:w,indices:A,batchIds:L,batchedIndices:E,indexOffsets:U,indexCounts:G,boundingVolumes:S,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:J,center:H};Y(V,a,n,b,_),Y(V,r,i,p,j),Y(V,o,d,y,z),Y(V,s,c,y,N);var T=K(A.BYTES_PER_ELEMENT,E,S);return t.push(B.buffer,w.buffer,A.buffer),t.push(L.buffer,U.buffer,G.buffer),t.push(T.buffer),{positions:B.buffer,vertexBatchIds:w.buffer,indices:A.buffer,indexOffsets:U.buffer,indexCounts:G.buffer,batchIds:L.buffer,packedBuffer:T.buffer}})});
