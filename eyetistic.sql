-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 07:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eyetistic`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `Email` varchar(50) DEFAULT NULL,
  `prodId` int(20) DEFAULT NULL,
  `quantity` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`Email`, `prodId`, `quantity`) VALUES
('mahamtkhan2@gmail.com', 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` int(11) NOT NULL,
  `Address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `checkout`
--

INSERT INTO `checkout` (`Name`, `Email`, `Phone`, `Address`) VALUES
('aatra aamir', 'aatra@gmail.com', 2147483647, 'F123 N Nazimabad Khi'),
('vic ', 'vic123@gmail.com', 2147483647, 'R49 Hillside'),
('aamir anwer', 'aamir@gmail.com', 2147483647, 'F123 Block F'),
('abdul sami', 'abudl@gmail.com', 2147483647, 'Gulistan e Jauhar'),
('', '', 0, ''),
('Syeda Umm E Abiha Rizvi', 'abiharizvi10.04@gmail.com', 2147483647, 'Johar, Karachi');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `Email` text NOT NULL,
  `prodId` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`Email`, `prodId`) VALUES
('abiharizvi10.04@gmail.com', 2),
('abiharizvi10.04@gmail.com', 10),
('abiharizvi10.04@gmail.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `Email` varchar(50) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `username` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`Email`, `Password`, `username`) VALUES
('', '', ''),
('aamir123@gmail.com', '12345', 'aamir123'),
('aamir@gmail.com', '123', 'aamir987'),
('aatra@gmail.com', '13579', 'aatra894'),
('abiha123@gmail.com', '12345', 'abiha123'),
('abiharizvi10.04@gmail.com', '123', 'abiha'),
('amber@gmail.com', '123', 'amber'),
('arif@yahoo.com', 'arif123', 'arif12'),
('hamna123@gmail.com', '12345', 'hamna123'),
('mahamtkhan2@gmail.com', '123', 'maham'),
('momalkhan@gmail.com', '123', 'momal'),
('ramsha@gmail.com', 'ramsha', 'ramsha253'),
('uzma123@gmail.com', 'uzma', 'uzma123'),
('vic123@gmail.com', '456', 'vic123');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `prodid` int(20) NOT NULL,
  `prodName` varchar(40) NOT NULL,
  `prodCategory` varchar(30) NOT NULL,
  `prodPrice` int(20) NOT NULL,
  `prodColor` varchar(20) NOT NULL,
  `prodQuantity` int(10) NOT NULL,
  `prodRatings` int(10) NOT NULL,
  `prodImage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prodid`, `prodName`, `prodCategory`, `prodPrice`, `prodColor`, `prodQuantity`, `prodRatings`, `prodImage`) VALUES
(1, 'Blue Lens', 'Lens', 2500, 'Blue', 8, 4, 'lens1.jpg'),
(2, 'Grey Retro', 'Glasses', 3500, 'Grey', 6, 5, 'product2.JPG'),
(3, 'Chic Glasses', 'Glasses', 1350, 'red', 10, 3, 'product4.jpg'),
(4, 'Green Lens', 'Lens', 1500, 'green', 2, 4, 'lens3.jpg'),
(5, 'Antique Glasses', 'Glasses', 1950, 'black', 2, 4, 'product6.jpg'),
(6, 'Stylish Glasses', 'Glasses', 2100, 'white', 3, 5, 'product7.jpg'),
(7, 'Round Glasses', 'Glasses', 1100, 'black', 6, 4, 'product10.jpg'),
(8, 'Round Retro Glasses', 'Glasses', 1100, 'brown', 3, 3, 'product11.jpg'),
(9, 'Acetate Frame', 'Glasses', 1800, 'black', 5, 4, 'product12.jpg'),
(10, 'Cat Eye Frame', 'Glasses', 1600, 'black', 4, 3, 'product15.jpg'),
(11, 'Brown Lens', 'Lens', 1650, 'brown', 7, 4, 'lens4.jpg'),
(12, 'Crystal Frame Glasses', 'Glasses', 2999, 'Silver', 4, 4, 'product19.JPG'),
(13, 'Black Retro', 'Glasses', 3200, 'black', 3, 4, 'product1.JPG'),
(14, 'White Glasses ', 'Glasses', 2200, 'white', 2, 3, 'product5.jpg'),
(15, 'Mixed Frame Glasses', 'Glasses', 4200, 'silver', 7, 4, 'product16.JPG'),
(16, 'Hazel Lens', 'Lens', 1200, 'Hazel', 4, 3, 'lens1.jpg'),
(17, 'Grey Lens', 'Lens', 1400, 'Grey', 4, 4, 'lens2.jpg'),
(18, 'Green Lens', 'Lens', 1500, 'Green', 2, 5, 'lens3.jpg'),
(19, 'Blunkett Lens', 'Lens', 1800, 'Grey', 4, 3, 'lens4.jpg'),
(20, 'Golden Lens', 'Lens', 1000, 'Gold', 10, 2, 'lens5.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD KEY `prodId` (`prodId`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prodid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`prodId`) REFERENCES `products` (`prodid`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
