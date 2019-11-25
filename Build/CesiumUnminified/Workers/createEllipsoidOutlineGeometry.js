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
define(['./defined-b9ff0e39', './Check-e6691f86', './freezeObject-2d5b18ce', './defaultValue-199f5aa8', './Math-2145e044', './Cartesian2-40ed5530', './defineProperties-ae15c9d5', './Transforms-94513c2d', './RuntimeError-d5522ee3', './WebGLConstants-554ddbe2', './ComponentDatatype-9477db2c', './GeometryAttribute-4754007e', './when-c208a7cf', './GeometryAttributes-c3465b51', './IndexDatatype-668aa2f9', './GeometryOffsetAttribute-5aa2ee88', './EllipsoidOutlineGeometry-7065467b'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, EllipsoidOutlineGeometry) { 'use strict';

    function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
            if (defined.defined(ellipsoidGeometry.buffer)) {
                ellipsoidGeometry = EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.unpack(ellipsoidGeometry, offset);
            }
            return EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.createGeometry(ellipsoidGeometry);
        }

    return createEllipsoidOutlineGeometry;

});
