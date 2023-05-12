-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-05-2023 a las 20:57:06
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transporte`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'La JST presentó su Repositorio Institucional', 'Se trata de un espacio digital centralizado y organizado, de almacenamiento y difusión abierta y gratuita de la documentación digital relativa a la seguridad en el transporte producida por el organismo. El mismo fue desarrollado contemplando estrategias de accesibilidad para que todas y todos puedan acceder a su contenido.', 'En el marco del Simposio JST “Presente y futuro de la seguridad en el transporte en Argentina y la región”, la Junta de Seguridad en el Transporte, organismo descentralizado del Ministerio de Transporte de la Nación, presentó su Repositorio Institucional (RI-JST), una biblioteca digital que concentra información documental que produce la propia institución.\r\n\r\nEl Simposio se realizó el 25, 26 y 27 de abril en el auditorio de la Universidad Católica Argentina (UCA) y contó con la participación de más de 1100 asistentes y 50 expositores nacionales e internacionales. En la segunda jornada, se presentó el proyecto del Repositorio JST. En el panel de presentación participaron Julián Obaid, Presidente de la JST, Vilma Paura, Directora Nacional de Oferta Académica del Instituto Nacional de la Administración Pública (INAP), y Natalia Baez Becker, Responsable del Centro de Documentación e Información sobre Administración Pública (INAP).\r\n\r\nEl Repositorio Institucional de la JST es un espacio digital centralizado y organizado, de almacenamiento y difusión abierta y gratuita de la documentación digital relativa a la seguridad en el transporte producida por el organismo. El mismo fue desarrollado contemplando estrategias de accesibilidad para que todas y todos puedan acceder a su contenido.', 'o1jupsepgy14uajrjzcx'),
(2, 'Jujuy: largas esperas para acceder al transporte gratuito electoral', 'Se reportan demoras de hasta tres horas, para ir a localidades que demandan más de 4 horas de viaje. Algunas personas estaban desistiendo de viajar, por entender que no llegarán a tiempo para sufragar. ', 'La nueva Terminal de Ómnibus de la ciudad de San Salvador de Jujuy es escenario desde la primera hora de la mañana de la frustración y el enojo de electores que concurrieron temprano para asegurarse el traslado gratuito hasta la localidad donde están empadronados pero deben esperar por horas para conseguir un lugar. \r\n\r\nMinutos después de las 10 salió el primer colectivo con destino a Abra Pampa, distante 211 kilómetros de la capital provincial y a casi 4 horas de viaje en transporte público. Hubo gente que llegó a las 7.30 para tomar ese primer colectivo, pero no toda pudo conseguir un lugar, y el próximo saldrá recién a las 12. \r\n\r\nEl colectivo con destino final a Abra Pampa llevaba votantes a Maimará, Tilcara, Humahuaca y Abra Pampa. ', 'nwgdqigv3maqkvtlilvw'),
(3, 'RSO: Colisión por desenganche de acoplado en RP 6 altura Campana', 'La JST publicó los resultados de su investigación sobre la colisión ocurrida el 21 de enero del 2021 en la Ruta Provincial 6 a la altura de Campana, Provincia de Buenos Aires. Cuenta con Recomendaciones de Seguridad Operacional dirigidas a quienes pueden implementar medidas concretas para elevar el estándar de seguridad con el que operan estos servicios en nuestro país, con el fin de prevenir futuros sucesos.', 'La Junta de Seguridad en el Transporte (JST), organismo descentralizado en la órbita del Ministerio de Transporte de la Nación, publicó los resultados de su investigación sobre una colisión ocurrida el 21 de enero del 2021 en la Ruta Provincial 6 a la altura de Campana, Provincia de Buenos Aires.\r\n\r\nLa Junta de Seguridad en el Transporte investiga accidentes e incidentes ocurridos en todos los modos de transporte. Su objetivo es contribuir a la seguridad en el transporte con estudios, recomendaciones y acciones eficaces, sin buscar responsabilidades civiles y/o penales.\r\n\r\nEn relación al suceso investigado, luego de cruzar el puente Siderca, se desprendió el acoplado de un camión tractor rígido con tanque cisterna que circulaba sentido Campana - Zárate. El acoplado impactó contra las barreras metálicas y colisionó contra un vehículo particular que circulaba en dirección contraria.\r\n\r\nEn la investigación realizada por la Junta de Seguridad en el Transporte se identificaron una serie de defensas que no pudieron evitar que se produjera el suceso.\r\n\r\nSe observó que tanto la unidad tractora como el acoplado presentaban falta de mantenimiento y un avanzado grado de deterioro en sus componentes mecánicos. En la inspección realizada luego del accidente se pudo observar que el sistema de enganche, pieza que según la normativa vigente no puede ser reparada o alterada, había sido modificada por una reparación por soldadura que presentaba fracturas.', 'yj1pixmteqwcifanuk3a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Joako', 'dbc4d84bfcfe2284ba11beffb853a8c4'),
(2, 'Tuli', 'dbc4d84bfcfe2284ba11beffb853a8c4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
