-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-03-2024 a las 18:12:38
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autores`
--

CREATE TABLE `autores` (
  `id_aut` int(11) NOT NULL,
  `nombre_aut` varchar(255) NOT NULL,
  `direccion_aut` varchar(255) NOT NULL,
  `fechanac_aut` datetime NOT NULL,
  `telefono_aut` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editoriales`
--

CREATE TABLE `editoriales` (
  `id_edi` int(11) NOT NULL,
  `nombre_edi` varchar(255) NOT NULL,
  `direccion_edi` varchar(255) NOT NULL,
  `telefono_edi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escribes`
--

CREATE TABLE `escribes` (
  `cuantia` float NOT NULL,
  `LibroIdLib` int(11) NOT NULL,
  `AutoreIdAut` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_lib` int(11) NOT NULL,
  `nombre_lib` varchar(255) NOT NULL,
  `unidades_lib` int(11) NOT NULL,
  `precio_lib` float NOT NULL,
  `EditorialeIdEdi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`id_aut`);

--
-- Indices de la tabla `editoriales`
--
ALTER TABLE `editoriales`
  ADD PRIMARY KEY (`id_edi`),
  ADD UNIQUE KEY `Editoriales_nombre_edi_unique` (`nombre_edi`);

--
-- Indices de la tabla `escribes`
--
ALTER TABLE `escribes`
  ADD PRIMARY KEY (`LibroIdLib`,`AutoreIdAut`),
  ADD KEY `AutoreIdAut` (`AutoreIdAut`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_lib`),
  ADD UNIQUE KEY `Libros_nombre_lib_unique` (`nombre_lib`),
  ADD KEY `EditorialeIdEdi` (`EditorialeIdEdi`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autores`
--
ALTER TABLE `autores`
  MODIFY `id_aut` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `editoriales`
--
ALTER TABLE `editoriales`
  MODIFY `id_edi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id_lib` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `escribes`
--
ALTER TABLE `escribes`
  ADD CONSTRAINT `escribes_ibfk_1` FOREIGN KEY (`LibroIdLib`) REFERENCES `libros` (`id_lib`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `escribes_ibfk_2` FOREIGN KEY (`AutoreIdAut`) REFERENCES `autores` (`id_aut`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `libros_ibfk_1` FOREIGN KEY (`EditorialeIdEdi`) REFERENCES `editoriales` (`id_edi`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
