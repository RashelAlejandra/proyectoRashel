-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2020 a las 07:31:06
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventariobd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `ced_cliente` varchar(9) NOT NULL,
  `nom_cliente` varchar(20) NOT NULL,
  `ape_cliente` varchar(20) NOT NULL,
  `tlf_cliente` varchar(14) NOT NULL,
  `correo_cliente` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compra`
--

CREATE TABLE `detalle_compra` (
  `nro_fact_compra` varchar(12) NOT NULL,
  `cod_producto` varchar(10) NOT NULL,
  `cantidad_producto` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `nro_fact_venta` varchar(12) NOT NULL,
  `cod_producto` varchar(10) NOT NULL,
  `cantidad_producto` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_compra`
--

CREATE TABLE `factura_compra` (
  `nro_fact_compra` varchar(12) NOT NULL,
  `rif_prov` varchar(11) NOT NULL,
  `fecha_factura_c` date NOT NULL,
  `cod_pagoc` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_venta`
--

CREATE TABLE `factura_venta` (
  `nro_fact_venta` varchar(12) NOT NULL,
  `ced_cliente` varchar(9) NOT NULL,
  `fecha_factura_v` date NOT NULL,
  `cod_pagov` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago_compra`
--

CREATE TABLE `pago_compra` (
  `cod_pagoc` varchar(3) NOT NULL,
  `tipoPagoC` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago_venta`
--

CREATE TABLE `pago_venta` (
  `cod_pagov` varchar(3) NOT NULL,
  `tipoPagoV` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `cod_producto` varchar(10) NOT NULL,
  `nom_producto` varchar(40) NOT NULL,
  `marca_producto` varchar(20) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `costo` int(11) NOT NULL,
  `existencia_inv` int(11) NOT NULL,
  `stock_max` int(11) NOT NULL,
  `stock_min` int(11) NOT NULL,
  `aplicacion_vehiculo` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `rif_prov` varchar(11) NOT NULL,
  `razon_social` varchar(30) NOT NULL,
  `tlf_prov` varchar(14) NOT NULL,
  `correo_prov` varchar(40) NOT NULL,
  `direccion_prov` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ced_usuario` varchar(9) NOT NULL,
  `nom_usuario` varchar(10) NOT NULL,
  `nom_real_usuario` varchar(20) NOT NULL,
  `ape_usuario` varchar(20) NOT NULL,
  `clave_usuario` varchar(10) NOT NULL,
  `rol_usuario` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`ced_cliente`),
  ADD UNIQUE KEY `ced_cliente` (`ced_cliente`);

--
-- Indices de la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD KEY `detallecompra-factura` (`nro_fact_compra`),
  ADD KEY `detallecompra-producto` (`cod_producto`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD KEY `detalleventa-factura` (`nro_fact_venta`),
  ADD KEY `detalleventa-producto` (`cod_producto`);

--
-- Indices de la tabla `factura_compra`
--
ALTER TABLE `factura_compra`
  ADD PRIMARY KEY (`nro_fact_compra`),
  ADD KEY `fact_compra_proveedor` (`rif_prov`),
  ADD KEY `pago-compra` (`cod_pagoc`);

--
-- Indices de la tabla `factura_venta`
--
ALTER TABLE `factura_venta`
  ADD PRIMARY KEY (`nro_fact_venta`),
  ADD KEY `fact_venta_cliente` (`ced_cliente`),
  ADD KEY `pago-venta` (`cod_pagov`);

--
-- Indices de la tabla `pago_compra`
--
ALTER TABLE `pago_compra`
  ADD PRIMARY KEY (`cod_pagoc`);

--
-- Indices de la tabla `pago_venta`
--
ALTER TABLE `pago_venta`
  ADD PRIMARY KEY (`cod_pagov`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`cod_producto`),
  ADD UNIQUE KEY `cod_producto` (`cod_producto`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`rif_prov`),
  ADD UNIQUE KEY `rif_prov` (`rif_prov`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ced_usuario`),
  ADD UNIQUE KEY `ced_usuario` (`ced_usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD CONSTRAINT `detallecompra-factura` FOREIGN KEY (`nro_fact_compra`) REFERENCES `factura_compra` (`nro_fact_compra`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detallecompra-producto` FOREIGN KEY (`cod_producto`) REFERENCES `producto` (`cod_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD CONSTRAINT `detalleventa-factura` FOREIGN KEY (`nro_fact_venta`) REFERENCES `factura_venta` (`nro_fact_venta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detalleventa-producto` FOREIGN KEY (`cod_producto`) REFERENCES `producto` (`cod_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura_compra`
--
ALTER TABLE `factura_compra`
  ADD CONSTRAINT `fact_compra_proveedor` FOREIGN KEY (`rif_prov`) REFERENCES `proveedor` (`rif_prov`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pago-compra` FOREIGN KEY (`cod_pagoc`) REFERENCES `pago_compra` (`cod_pagoc`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura_venta`
--
ALTER TABLE `factura_venta`
  ADD CONSTRAINT `fact_venta_cliente` FOREIGN KEY (`ced_cliente`) REFERENCES `cliente` (`ced_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pago-venta` FOREIGN KEY (`cod_pagov`) REFERENCES `pago_venta` (`cod_pagov`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
