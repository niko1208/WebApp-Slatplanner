-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 25, 2017 at 06:15 PM
-- Server version: 5.6.32-78.1-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `slatplan_slat`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_activity`
--

use 'db_slat';

CREATE TABLE IF NOT EXISTS `tbl_activity` (
  `id` int(11) NOT NULL,
  `activity_id` varchar(255) NOT NULL,
  `activity_name` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `start` varchar(255) NOT NULL,
  `finish` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `priority` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `pid` varchar(255) NOT NULL,
  `sid` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5475 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_activity`
--

INSERT INTO `tbl_activity` (`id`, `activity_id`, `activity_name`, `duration`, `start`, `finish`, `size`, `color`, `code`, `location`, `priority`, `url`, `note`, `pid`, `sid`) VALUES
(115, 'A001', 'Activity 01', '16', '10/9/17', '', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '59', 0),
(116, 'A002', 'Activity 02', '7', '10/27/17', '', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '59', 0),
(117, 'A003', 'Activity 03', '22', '11/2/17', '', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '59', 0),
(118, 'A004', 'Activity 04', '25', '10/12/17', '', '2', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '59', 0),
(119, 'A005', 'Activity 05', '19', '10/14/17', '', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '59', 0),
(120, 'A006', 'Activity 06', '8', '11/17/17', '', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '59', 0),
(121, 'A007', 'Activity 07', '8', '10/19/17', '', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '59', 0),
(122, 'A008', 'Activity 08', '22', '12/2/17', '', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '59', 0),
(123, 'A009', 'Activity 09', '6', '1/18/18', '', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '59', 0),
(124, 'A001', 'Activity 01', '16', '10/9/17', '', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '60', 0),
(125, 'A002', 'Activity 02', '7', '10/27/17', '', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '60', 0),
(126, 'A003', 'Activity 03', '22', '11/2/17', '', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '60', 0),
(127, 'A004', 'Activity 04', '25', '10/12/17', '', '2', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '60', 0),
(128, 'A005', 'Activity 05', '19', '10/14/17', '', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '60', 0),
(129, 'A006', 'Activity 06', '8', '11/17/17', '', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '60', 0),
(130, 'A007', 'Activity 07', '8', '10/19/17', '', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '60', 0),
(131, 'A008', 'Activity 08', '22', '12/2/17', '', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '60', 0),
(132, 'A009', 'Activity 09', '6', '1/18/18', '', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '60', 0),
(133, 'A010', 'Activity 10', '19', '1/23/18', '', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '60', 0),
(134, 'A011', 'Activity 11', '14', '2/4/18', '', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '60', 0),
(135, 'A012', 'Activity 12', '4', '2/1/18', '', '8', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '60', 0),
(476, 'A001', 'Activity 01', 'c', '10/9/17', '10/9/17', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '19', 0),
(477, 'A002', 'Activity 02', '1dcdf', '10/27/17', '11/3/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '19', 0),
(478, 'A003', 'Activity 03', '22', '11/2/17', '11/26/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '19', 0),
(479, 'A004', 'Activity 04', '25', '10/12/17', '11/10/17', '2', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '19', 0),
(480, 'A005', 'Activity 05', '19', '10/14/17', '11/4/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '19', 0),
(481, 'A006', 'Activity 06', '8', '11/17/17', '11/25/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '19', 0),
(482, 'A007', 'Activity 07', '8', '10/19/17', '10/27/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '19', 0),
(483, 'A008', 'Activity 08', '22', '12/2/17', '12/27/17', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '19', 0),
(484, 'A009', 'Activity 09', '6', '1/18/18', '1/24/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '19', 0),
(485, 'A010', 'Activity 10', '19', '1/23/18', '2/13/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '19', 0),
(486, 'A011', 'Activity 11', '14', '2/4/18', '2/20/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '19', 0),
(487, 'A012', 'Activity 12', '4', '2/1/18', '2/4/18', '8', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '19', 0),
(488, 'A013', 'Activity 13', '20', '12/18/17', '1/9/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '19', 0),
(489, 'A014', 'Activity 14', '25', '12/20/17', '1/17/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '19', 0),
(493, 'A001', 'Activity 01', '1', '10/9/2017', '10/9/17', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '8', 0),
(662, 'A001', 'Activity 01', '5', '10/9/17', '10/17/17', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '62', 0),
(663, 'A002', 'Activity 02', '7', '10/27/17', '11/7/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '62', 0),
(664, 'A003', 'Activity 03', '22', '11/2/17', '12/4/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '62', 0),
(665, 'A004', 'Activity 04', '25', '10/12/17', '11/17/17', '2', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '62', 0),
(666, 'A005', 'Activity 05', '19', '10/14/17', '11/13/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '62', 0),
(667, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '62', 0),
(668, 'A007', 'Activity 07', '8', '10/19/17', '10/31/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '62', 0),
(669, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '62', 0),
(670, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '62', 0),
(671, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '62', 0),
(672, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '62', 0),
(673, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '62', 0),
(674, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '62', 0),
(675, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '62', 0),
(676, 'A001', 'Activity 01', '5', '10/9/17', '10/13/17', '100', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 0),
(677, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 0),
(678, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 0),
(679, 'A004', 'Activity 04', '21', '10/16/17', '11/13/17', '2', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 0),
(680, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 0),
(681, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 0),
(682, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 0),
(683, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 0),
(684, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 0),
(685, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 0),
(686, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 0),
(687, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '80', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 0),
(688, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 0),
(689, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 0),
(690, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 0),
(691, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 0),
(692, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 0),
(693, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '20', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 0),
(694, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 0),
(695, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 0),
(696, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 0),
(697, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 0),
(698, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 0),
(699, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 0),
(700, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 0),
(701, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 0),
(702, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 0),
(703, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 0),
(1189, 'A001', 'Test A001', '5', '10/30/17', '11/3/17', '', '', 'Steve', '', '', '', '', '63', 0),
(1298, 'A001', 'Excavate A', '4', '10/31/2017', '11/3/17', 'Todd', '#1b2170', '5', 'www.slatplanner.com', 'Notes 001', 'A002', 'Excavate B', '75', 0),
(1299, '3', '11/1/2017', '11/3/17', 'Todd', '#1b2170', '5', 'www.procore.com', 'Notes 002', 'A003', 'Form Foundation A', '5', '11/3/2017', '75', 0),
(1300, '11/9/17', 'Paul', '#dba54e', '5', 'www.assemblesystems.com', 'Notes 003', 'A004', 'Form Foundation B', '4', '11/4/2017', '11/9/17', 'Paul', '75', 0),
(1301, '#dba54e', '5', 'www.slatplanner.com', 'Notes 004', 'A005', 'Rebar Foundation A', '6', '11/5/2017', '11/13/17', 'Sue', '#c32668', '6', '75', 0),
(1302, 'www.procore.com', 'Notes 005', 'A006', 'Rebar Foundation B', '5', '11/7/2017', '11/13/17', 'Sue', '#c32668', '6', 'www.assemblesystems.com', 'Notes 006', '75', 0),
(1303, 'A007', 'Pour Foundation A', '1', '11/7/2017', '11/7/17', 'Steve', '#893232', '8', 'www.slatplanner.com', 'Notes 007', 'A008', 'Pour Foundation B', '75', 0),
(1304, '1', '11/9/2017', '11/9/17', 'Steve', '#893232', '8', 'www.procore.com', 'Notes 008', 'A009', 'Strip Foundation A', '2', '11/8/2017', '75', 0),
(1305, '11/9/17', 'Paul', '#dba54e', '3', 'www.assemblesystems.com', 'Notes 009', 'A010', 'Strip Foundation B', '2', '11/10/2017', '11/13/17', 'Paul', '75', 0),
(1306, '#dba54e', '3', 'www.slatplanner.com', 'Notes 010', 'A011', 'Erect Steel A', '12', '11/9/2017', '11/27/17', 'Ted', '#8a8a8a', '7', '75', 0),
(1307, 'www.procore.com', 'Notes 011', 'A012', 'Erect Steel B', '11', '11/11/2017', '11/28/17', 'Ted', '#8a8a8a', '7', 'www.assemblesystems.com', 'Notes 012', '75', 0),
(1308, 'A013', 'Decking A', '6', '11/11/2017', '11/20/17', 'Ted', '#8a8a8a', '6', 'www.slatplanner.com', 'Notes 013', 'A014', 'Decking B', '75', 0),
(1309, '5', '11/12/2017', '11/17/17', 'Ted', '#8a8a8a', '6', 'www.procore.com', 'Notes 014', 'A015', 'MEP SOMD A', '5', '11/21/17', '75', 0),
(1310, '11/28/17', 'George', '#3bb3b9', '5', 'www.assemblesystems.com', 'Notes 015', 'A016', 'MEP SOMD B', '4', '11/18/17', '11/23/17', 'George', '75', 0),
(1311, '#3bb3b9', '5', 'www.slatplanner.com', 'Notes 016', 'A017', 'Pour SOMD A', '1', '11/29/17', '11/29/17', 'Steve', '#893232', '8', '75', 0),
(1312, 'www.procore.com', 'Notes 017', 'A018', 'Pour SOMD B', '1', '11/24/17', '11/27/17', 'Steve', '#893232', '8', 'www.assemblesystems.com', 'Notes 018', '75', 0),
(1341, 'A001', 'Activity 01', '5', '10/9/17', '10/17/17', '200', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 1),
(1342, 'A002', 'Activity 02', '7', '10/27/17', '11/7/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 1),
(1343, 'A003', 'Activity 03', '22', '11/2/17', '12/4/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 1),
(1344, 'A004', 'Activity 04', '21', '10/16/17', '11/14/17', '2', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 1),
(1345, 'A005', 'Activity 05', '19', '10/14/17', '11/10/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 1),
(1346, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 1),
(1347, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 1),
(1348, 'A008', 'Activity 08', '22', '12/2/17', '1/3/18', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 1),
(1349, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 1),
(1350, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 1),
(1351, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 1),
(1352, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '80', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 1),
(1353, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 1),
(1354, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 1),
(1355, 'A001', 'Activity 01', '16', '10/9/17', '11/1/17', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 1),
(1356, 'A002', 'Activity 02', '7', '10/27/17', '11/7/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 1),
(1357, 'A003', 'Activity 03', '22', '11/2/17', '12/4/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 1),
(1358, 'A004', 'Activity 04', '25', '10/12/17', '11/16/17', '20', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 1),
(1359, 'A005', 'Activity 05', '19', '10/14/17', '11/10/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 1),
(1360, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 1),
(1361, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 1),
(1362, 'A008', 'Activity 08', '22', '12/2/17', '1/3/18', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 1),
(1363, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 1),
(1364, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 1),
(1365, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 1),
(1366, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 1),
(1367, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 1),
(1368, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 1),
(1369, 'A001', 'Activity 01', '5', '10/9/17', '10/13/17', '100', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 2),
(1370, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 2),
(1371, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 2),
(1372, 'A004', 'Activity 04', '21', '10/16/17', '11/13/17', '2', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 2),
(1373, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 2),
(1374, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 2),
(1375, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 2),
(1376, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 2),
(1377, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 2),
(1378, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 2),
(1379, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 2),
(1380, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '80', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 2),
(1381, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 2),
(1382, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 2),
(1383, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 2),
(1384, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 2),
(1385, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 2),
(1386, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '20', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 2),
(1387, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 2),
(1388, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 2),
(1389, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 2),
(1390, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 2),
(1391, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 2),
(1392, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 2),
(1393, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', '', '', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 2),
(1394, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '#3498DB', 'Todd', '', '', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 2),
(1395, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', '', '', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 2),
(1396, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', '', '', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 2),
(1447, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A002', 'Activity 02', '80', 0),
(1448, '7', '10/27/17', '11/6/17', '1', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A003', 'Activity 03', '22', '11/2/17', '80', 0),
(1449, '12/1/17', '4', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '80', 0),
(1450, 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', 'Stan', 'Floor 1', '80', 0),
(1451, 'High', 'www.slatplanner.com/test', 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', '80', 0),
(1452, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'A008', 'Activity 08', '80', 0),
(1453, '22', '12/2/17', '1/2/18', '1', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'A009', 'Activity 09', '6', '1/18/18', '80', 0),
(1454, '1/25/18', '10', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '80', 0),
(1455, 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', 'Stan', 'Floor 2', '80', 0),
(1456, 'Low', 'www.slatplanner.com/test', 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', '80', 0),
(1457, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'A014', 'Activity 14', '80', 0),
(1458, '25', '12/20/17', '1/23/18', '12', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', '', '', '', '', '80', 0),
(1487, 'A001', 'Activity 01', '5', '10/9/17', '10/17/17', '100', '#3498DB', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 3),
(1488, 'A002', 'Activity 02', '7', '10/27/17', '11/7/17', '1', '#3498DB', 'Todd', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 3),
(1489, 'A003', 'Activity 03', '22', '11/2/17', '12/4/17', '4', '#3498DB', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 3),
(1490, 'A004', 'Activity 04', '21', '10/16/17', '11/14/17', '2', '#F5B041', 'Stan', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 3),
(1491, 'A005', 'Activity 05', '19', '10/14/17', '11/10/17', '8', '#F5B041', 'Stan', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 3),
(1492, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 3),
(1493, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 3),
(1494, 'A008', 'Activity 08', '22', '12/2/17', '1/3/18', '1', '#AAB7B8', 'Steve', 'Floor 1', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 3),
(1495, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 3),
(1496, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 3),
(1497, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 3),
(1498, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '80', '#3498DB', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 3),
(1499, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 3),
(1500, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 3),
(1501, 'A001', 'Activity 01', '16', '10/9/17', '11/1/17', '12', '#3498DB', 'Todd', 'Floor 1', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 01', '61', 3),
(1502, 'A002', 'Activity 02', '7', '10/27/17', '11/7/17', '1', '#3498DB', 'Todd', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 02', '61', 3),
(1503, 'A003', 'Activity 03', '22', '11/2/17', '12/4/17', '4', '#3498DB', 'Todd', 'Floor 2', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '61', 3),
(1504, 'A004', 'Activity 04', '25', '10/12/17', '11/16/17', '20', '#F5B041', 'Stan', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 04', '61', 3),
(1505, 'A005', 'Activity 05', '19', '10/14/17', '11/10/17', '8', '#F5B041', 'Stan', 'Floor 1', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 05', '61', 3),
(1506, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '#F5B041', 'Stan', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 06', '61', 3),
(1507, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '#AAB7B8', 'Steve', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 07', '61', 3),
(1508, 'A008', 'Activity 08', '22', '12/2/17', '1/3/18', '1', '#AAB7B8', 'Steve', 'Floor 2', 'High', 'www.slatplanner.com/test', 'Notes for Activity 08', '61', 3),
(1509, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '#AAB7B8', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '61', 3),
(1510, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '#117864', 'Fred', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 10', '61', 3),
(1511, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '#117864', 'Fred', 'Floor 1', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '61', 3),
(1512, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '#3498DB', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '61', 3),
(1513, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '#F5B041', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 13', '61', 3),
(1514, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '#AAB7B8', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 14', '61', 3),
(1515, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A002', 'Activity 02', '81', 0),
(1516, '7', '10/27/17', '11/6/17', '1', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A003', 'Activity 03', '22', '11/2/17', '81', 0),
(1517, '12/1/17', '4', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '81', 0),
(1518, 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', 'Stan', 'Floor 1', '81', 0),
(1519, 'High', 'www.slatplanner.com/test', 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', '81', 0),
(1520, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'A008', 'Activity 08', '81', 0),
(1521, '22', '12/2/17', '1/2/18', '1', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'A009', 'Activity 09', '6', '1/18/18', '81', 0),
(1522, '1/25/18', '10', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '81', 0),
(1523, 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', 'Stan', 'Floor 2', '81', 0),
(1524, 'Low', 'www.slatplanner.com/test', 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', '81', 0),
(1525, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'A014', 'Activity 14', '81', 0),
(1526, '25', '12/20/17', '1/23/18', '12', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', '', '', '', '', '81', 0),
(1555, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '', '82', 0),
(1556, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '', '82', 0),
(1557, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '', '82', 0),
(1558, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '', '82', 0),
(1559, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '', '82', 0),
(1560, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '', '82', 0),
(1561, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '', '82', 0),
(1562, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '', '82', 0),
(1563, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '', '82', 0),
(1564, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '', '82', 0),
(1565, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '', '82', 0),
(1566, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '', '82', 0),
(1567, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '', '82', 0),
(1568, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '', '82', 0),
(1569, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '83', 0),
(1570, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '83', 0),
(1571, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '83', 0),
(1572, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '83', 0),
(1573, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '83', 0),
(1574, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '83', 0),
(1575, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '83', 0),
(1576, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '83', 0),
(1577, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '83', 0),
(1578, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '83', 0),
(1579, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '83', 0),
(1580, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '83', 0),
(1581, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '83', 0),
(1582, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '83', 0),
(1597, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '84', 0),
(1598, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '84', 0),
(1599, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '84', 0),
(1600, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '84', 0),
(1601, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '84', 0),
(1602, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '84', 0),
(1603, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '84', 0),
(1604, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '84', 0),
(1605, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '84', 0),
(1606, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '84', 0),
(1607, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '84', 0),
(1608, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '84', 0),
(1609, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '84', 0),
(1610, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '84', 0),
(1611, '', '', '', '', '', '', '', 'Steve', 'Floor 1', 'High', '', '', '84', 0),
(1627, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '84', 4),
(1628, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '84', 4),
(1629, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '84', 4),
(1630, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '84', 4),
(1631, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '84', 4),
(1632, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '84', 4),
(1633, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '84', 4),
(1634, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '84', 4),
(1635, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '84', 4),
(1636, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '84', 4),
(1637, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '84', 4),
(1638, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '84', 4),
(1639, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '84', 4),
(1640, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '84', 4),
(1647, 'B0001', 'Test', '5', '12/1/17', '12/7/17', '10', '', 'Steve', 'Floor 1', 'High', 'www.slatplanner.com', 'Test', '79', 0),
(1648, 'B0002', 'Test 2', '0', '12/3', '12/6/01', '7', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com', 'Test 2', '79', 0),
(1663, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', 'Todd', '', '12', 'www.slatplanner.com/test', 'Notes for Activity 01', 'A002', 'Activity 02', '86', 0),
(1664, '7', '10/27/17', '11/6/17', 'Todd', '', '1', 'www.slatplanner.com/test', 'Notes for Activity 02', 'A003', 'Activity 03', '22', '11/2/17', '86', 0),
(1665, '12/1/17', 'Todd', '', '4', 'www.slatplanner.com/test', 'Notes for Activity 03', 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', 'Stan', '86', 0),
(1666, '', '2', 'www.slatplanner.com/test', 'Notes for Activity 04', 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', 'Stan', '', '8', '86', 0),
(1667, 'www.slatplanner.com/test', 'Notes for Activity 05', 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', 'Stan', '', '12', 'www.slatplanner.com/test', 'Notes for Activity 06', '86', 0),
(1668, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', 'Steve', '', '10', 'www.slatplanner.com/test', 'Notes for Activity 07', 'A008', 'Activity 08', '86', 0),
(1669, '22', '12/2/17', '1/2/18', 'Steve', '', '1', 'www.slatplanner.com/test', 'Notes for Activity 08', 'A009', 'Activity 09', '6', '1/18/18', '86', 0),
(1670, '1/25/18', 'Steve', '', '10', 'www.slatplanner.com/test', 'Notes for Activity 09', 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', 'Todd', '86', 0),
(1671, '', '3', 'www.slatplanner.com/test', 'Notes for Activity 10', 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', 'Stan', '', '6', '86', 0),
(1672, 'www.slatplanner.com/test', 'Notes for Activity 11', 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', 'Todd', '', '8', 'www.slatplanner.com/test', 'Notes for Activity 12', '86', 0),
(1673, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', 'Stan', '', '3', 'www.slatplanner.com/test', 'Notes for Activity 13', 'A014', 'Activity 14', '86', 0),
(1674, '25', '12/20/17', '1/23/18', 'Steve', '', '12', 'www.slatplanner.com/test', 'Notes for Activity 14', '', '', '', '', '86', 0),
(1730, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '87', 0),
(1731, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '87', 0),
(1732, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '87', 0),
(1733, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '87', 0),
(1734, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '87', 0),
(1735, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '87', 0),
(1736, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '87', 0),
(1737, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '87', 0),
(1738, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '87', 0),
(1739, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '87', 0),
(1740, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '87', 0),
(1741, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '87', 0),
(1742, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '87', 0),
(1743, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '87', 0),
(1786, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 6),
(1787, 'A002', 'Activity 02', '7', '', '11/6/17', '1', '', 'Todd', 'Floor 2', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 6),
(1788, 'A003', 'Activity 03', '22', '', '12/1/17', '4', '', 'Todd', 'Floor 2', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 6),
(1789, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 6),
(1790, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 6),
(1791, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 6),
(1792, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 6),
(1793, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 6),
(1794, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 6),
(1795, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 6),
(1796, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 6),
(1797, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 6),
(1798, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 6),
(1799, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 6),
(1800, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 7),
(1801, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 7),
(1802, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 7),
(1803, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 7),
(1804, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 7),
(1805, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 7),
(1806, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 7),
(1807, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 7),
(1808, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 7),
(1809, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 7),
(1810, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 7),
(1811, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 7),
(1812, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 7),
(1813, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 7),
(1814, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 5),
(1815, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 5),
(1816, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 5),
(1817, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 5),
(1818, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 5),
(1819, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 5),
(1820, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 5),
(1821, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 5),
(1822, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 5),
(1823, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 5);
INSERT INTO `tbl_activity` (`id`, `activity_id`, `activity_name`, `duration`, `start`, `finish`, `size`, `color`, `code`, `location`, `priority`, `url`, `note`, `pid`, `sid`) VALUES
(1824, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 5),
(1825, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 5),
(1826, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 5),
(1827, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 5),
(1828, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 8),
(1829, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 8),
(1830, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 8),
(1831, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 8),
(1832, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 8),
(1833, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 8),
(1834, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 8),
(1835, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 8),
(1836, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 8),
(1837, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 8),
(1838, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 8),
(1839, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 8),
(1840, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 8),
(1841, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 8),
(1842, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 9),
(1843, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 9),
(1844, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 9),
(1845, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 9),
(1846, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 9),
(1847, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 9),
(1848, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 9),
(1849, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 9),
(1850, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 9),
(1851, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 9),
(1852, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 9),
(1853, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 9),
(1854, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 9),
(1855, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 9),
(1954, 'A001', 'Activity 01', '16', '10/10/17', '10/31/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 11),
(1955, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 11),
(1956, 'A003', 'Activity 03', '22', '11/4/17', '12/5/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 11),
(1957, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 11),
(1958, 'A005', 'Activity 05', '19', '10/16/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 11),
(1959, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 11),
(1960, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 11),
(1961, 'A008', 'Activity 08', '22', '12/3/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 11),
(1962, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 11),
(1963, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 11),
(1964, 'A011', 'Activity 11', '14', '2/14/18', '3/5/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 11),
(1965, 'A012', 'Activity 12', '4', '2/10/18', '2/15/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 11),
(1966, 'A013', 'Activity 13', '20', '12/17/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 11),
(1967, 'A014', 'Activity 14', '25', '12/21/17', '1/24/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 11),
(1996, 'A001', 'Activity 01', '18', '10/8/17', '11/1/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 12),
(1997, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 12),
(1998, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 12),
(1999, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 12),
(2000, 'A005', 'Activity 05', '19', '10/16/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 12),
(2001, 'A006', 'Activity 06', '10', '11/21/17', '12/4/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 12),
(2002, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 12),
(2003, 'A008', 'Activity 08', '11', '12/4/17', '12/18/17', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 12),
(2004, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 12),
(2005, 'A010', 'Activity 10', '19', '1/27/18', '2/22/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 12),
(2006, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 12),
(2007, 'A012', 'Activity 12', '4', '2/4/18', '2/8/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 12),
(2008, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 12),
(2009, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 12),
(2010, 'A001', 'Activity 01', '16', '10/11/17', '11/1/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 13),
(2011, 'A002', 'Activity 02', '7', '10/28/17', '11/7/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 13),
(2012, 'A003', 'Activity 03', '22', '12/3/17', '1/2/18', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 13),
(2013, 'A004', 'Activity 04', '25', '11/13/17', '12/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 13),
(2014, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 13),
(2015, 'A006', 'Activity 06', '8', '12/17/17', '12/27/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 13),
(2016, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 13),
(2017, 'A008', 'Activity 08', '22', '12/6/17', '1/4/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 13),
(2018, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 13),
(2019, 'A010', 'Activity 10', '19', '2/23/18', '3/21/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 13),
(2020, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 13),
(2021, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 13),
(2022, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 13),
(2023, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 13),
(2038, 'A001', 'Activity 01', '16', '10/11/17', '11/1/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 10),
(2039, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 10),
(2040, 'A003', 'Activity 03', '22', '11/4/17', '12/5/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 10),
(2041, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 10),
(2042, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 10),
(2043, 'A006', 'Activity 06', '8', '11/19/17', '11/29/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 10),
(2044, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 10),
(2045, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 10),
(2046, 'A009', 'Activity 09', '6', '1/19/18', '1/26/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 10),
(2047, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 10),
(2048, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 10),
(2049, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 10),
(2050, 'A013', 'Activity 13', '20', '12/20/17', '1/16/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 10),
(2051, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 10),
(2052, 'A001', 'Activity 01', '16', '10/12/17', '11/2/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 14),
(2053, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 14),
(2054, 'A003', 'Activity 03', '22', '11/6/17', '12/5/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 14),
(2055, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 14),
(2056, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 14),
(2057, 'A006', 'Activity 06', '8', '11/21/17', '11/30/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 14),
(2058, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 14),
(2059, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 14),
(2060, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 14),
(2061, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 14),
(2062, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 14),
(2063, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 14),
(2064, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 14),
(2065, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 14),
(2080, 'A001', 'Activity 01', '16', '11/2/17', '11/23/17', '12', '', 'Todd', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 15),
(2081, 'A002', 'Activity 02', '7', '11/5/17', '11/14/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 15),
(2082, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 15),
(2083, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 15),
(2084, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 15),
(2085, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 15),
(2086, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 15),
(2087, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 15),
(2088, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 15),
(2089, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 15),
(2090, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 15),
(2091, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 15),
(2092, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 15),
(2093, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 15),
(2557, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 21),
(2558, 'A002', 'Activity 02', '9', '10/27/17', '11/8/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 21),
(2559, 'A003', 'Activity 03', '22', '11/1/17', '11/30/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 21),
(2560, 'A004', 'Activity 04', '20', '10/12/17', '11/8/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 21),
(2561, 'A005', 'Activity 05', '21', '10/14/17', '11/13/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 21),
(2562, 'A006', 'Activity 06', '10', '11/17/17', '11/30/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 21),
(2563, 'A007', 'Activity 07', '9', '10/19/17', '10/31/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 21),
(2564, 'A008', 'Activity 08', '22', '12/4/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 21),
(2565, 'A009', 'Activity 09', '6', '1/22/18', '1/29/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 21),
(2566, 'A010', 'Activity 10', '19', '1/22/18', '2/15/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 21),
(2567, 'A011', 'Activity 11', '14', '2/3/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 21),
(2568, 'A012', 'Activity 12', '8', '1/23/18', '2/1/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 21),
(2569, 'A013', 'Activity 13', '217', '12/17/17', '10/16/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 21),
(2570, 'A014', 'Activity 14', '27', '12/24/17', '1/30/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 21),
(2571, 'A015', 'Activity 15', '8', '11/19/17', '11/29/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 21),
(2572, 'A016', 'Activity 16', '10', '11/3/17', '11/16/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 21),
(2573, 'A017', 'Activity 17', '12', '11/14/17', '11/29/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 21),
(2574, 'A018', 'Activity 18', '19', '11/18/17', '12/14/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 21),
(2575, 'A019', 'Activity 19', '11', '11/27/17', '12/11/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 21),
(2576, 'A020', 'Activity 20', '21', '12/22/17', '1/19/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 21),
(2577, 'A021', 'Activity 21', '8', '12/6/17', '12/15/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 21),
(2578, 'A022', 'Activity 22', '5', '12/16/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 21),
(2579, 'A023', 'Activity 23', '9', '1/1/17', '1/12/17', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 21),
(2580, 'A024', 'Activity 24', '6', '1/23/17', '1/30/17', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 21),
(2581, 'A025', 'Activity 25', '20', '1/23/17', '2/17/17', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 21),
(2582, 'A026', 'Activity 26', '2', '1/3/17', '1/4/17', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 21),
(2583, 'A027', 'Activity 27', '25', '2/5/17', '3/10/17', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 21),
(2584, 'A028', 'Activity 28', '2', '2/24/17', '2/27/17', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 21),
(2585, 'A029', 'Activity 29', '19', '2/22/17', '3/20/17', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 21),
(2586, 'A030', 'Activity 30', '16', '2/21/17', '3/14/17', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 21),
(2587, 'A031', 'Activity 31', '14', '2/16/17', '3/7/17', '10', '', 'Todd', 'Floor 1', 'Medium', '', '', '89', 21),
(2588, 'A032', 'Activity 32', '16', '2/1/17', '2/22/17', '8', '', 'Stan', 'Floor 2', 'High', '', '', '89', 21),
(2589, 'A033', 'Activity 33', '10', '2/7/17', '2/20/17', '6', '', 'Steve', 'Floor 2', 'Low', '', '', '89', 21),
(2590, 'A034', 'Activity 34', '12', '1/29/17', '2/14/17', '14', '', 'Steve', 'Floor 1', 'Medium', '', '', '89', 21),
(2591, 'A036', 'Activity 36', '14', '1/21/17', '2/9/17', '0', '', 'Todd', 'Floor 2', 'Low', '', '', '89', 21),
(2592, 'A037', 'Activity 37', '10', '2/14', '2/27/01', '3', '', 'Stan', 'Floor 2', 'Low', '', '', '89', 21),
(2593, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 20),
(2594, 'A002', 'Activity 02', '9', '10/27/17', '11/8/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 20),
(2595, 'A003', 'Activity 03', '22', '11/1/17', '11/30/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 20),
(2596, 'A004', 'Activity 04', '20', '10/12/17', '11/8/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 20),
(2597, 'A005', 'Activity 05', '21', '10/14/17', '11/13/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 20),
(2598, 'A006', 'Activity 06', '10', '11/17/17', '11/30/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 20),
(2599, 'A007', 'Activity 07', '9', '10/19/17', '10/31/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 20),
(2600, 'A008', 'Activity 08', '21', '12/4/17', '1/1/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 20),
(2601, 'A009', 'Activity 09', '6', '1/20/18', '1/29/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 20),
(2602, 'A010', 'Activity 10', '19', '1/22/18', '2/15/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 20),
(2603, 'A011', 'Activity 11', '14', '2/1/18', '2/20/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 20),
(2604, 'A012', 'Activity 12', '4', '1/23/18', '1/26/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 20),
(2605, 'A013', 'Activity 13', '20', '12/17/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 20),
(2606, 'A014', 'Activity 14', '25', '12/24/17', '1/26/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 20),
(2607, 'A015', 'Activity 15', '8', '11/19/17', '11/29/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 20),
(2608, 'A016', 'Activity 16', '10', '11/3/17', '11/16/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 20),
(2609, 'A017', 'Activity 17', '12', '11/14/17', '11/29/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 20),
(2610, 'A018', 'Activity 18', '19', '11/18/17', '12/14/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 20),
(2611, 'A019', 'Activity 19', '11', '11/27/17', '12/11/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 20),
(2612, 'A020', 'Activity 20', '21', '12/22/17', '1/19/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 20),
(2613, 'A021', 'Activity 21', '8', '12/6/17', '12/15/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 20),
(2614, 'A022', 'Activity 22', '5', '12/16/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 20),
(2615, 'A023', 'Activity 23', '7', '1/1/17', '1/10/17', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 20),
(2616, 'A024', 'Activity 24', '6', '1/23/17', '1/30/17', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 20),
(2617, 'A025', 'Activity 25', '20', '1/21/17', '2/17/17', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 20),
(2618, 'A026', 'Activity 26', '2', '1/3/17', '1/4/17', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 20),
(2619, 'A027', 'Activity 27', '25', '2/5/17', '3/10/17', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 20),
(2620, 'A028', 'Activity 28', '2', '2/21/17', '2/22/17', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 20),
(2621, 'A029', 'Activity 29', '19', '2/22/17', '3/20/17', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 20),
(2622, 'A030', 'Activity 30', '16', '2/18/17', '3/13/17', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 20),
(2623, 'A031', 'Activity 31', '12', '2/16/17', '3/3/17', '10', '', 'Todd', 'Floor 1', 'Medium', '', '', '89', 20),
(2624, 'A032', 'Activity 32', '16', '1/31/17', '2/21/17', '8', '', 'Stan', 'Floor 2', 'High', '', '', '89', 20),
(2625, 'A033', 'Activity 33', '10', '2/1/17', '2/14/17', '6', '', 'Steve', 'Floor 2', 'Low', '', '', '89', 20),
(2626, 'A034', 'Activity 34', '12', '1/29', '2/13/01', '14', '', 'Steve', 'Floor 1', 'Medium', '', '', '89', 20),
(2939, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 17),
(2940, 'A002', 'Activity 02', '7', '10/27/17', '11/6/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 17),
(2941, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 17),
(2942, 'A004', 'Activity 04', '25', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 17),
(2943, 'A005', 'Activity 05', '19', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 17),
(2944, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 17),
(2945, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 17),
(2946, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 17),
(2947, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 17),
(2948, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 17),
(2949, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 17),
(2950, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 17),
(2951, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 17),
(2952, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 17),
(2953, 'A015', 'Activity 15', '8', '11/17/17', '11/28/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 17),
(2954, 'A016', 'Activity 16', '10', '11/3/17', '11/16/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 17),
(2955, 'A017', 'Activity 17', '12', '11/12/17', '11/28/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 17),
(2956, 'A018', 'Activity 18', '20', '11/18/17', '12/15/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 17),
(2957, 'A019', 'Activity 19', '14', '11/27/17', '12/14/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 17),
(2958, 'A020', 'Activity 20', '21', '12/24/17', '1/22/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 17),
(2959, 'A021', 'Activity 21', '8', '12/3/17', '12/13/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 17),
(2960, 'A022', 'Activity 22', '5', '12/18/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 17),
(2961, 'A023', 'Activity 23', '7', '1/7/18', '1/16/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 17),
(2962, 'A024', 'Activity 24', '5', '1/19/18', '1/25/18', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 17),
(2963, 'A025', 'Activity 25', '20', '1/23/18', '2/19/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 17),
(2964, 'A026', 'Activity 26', '2', '1/2/18', '1/3/18', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 17),
(2965, 'A027', 'Activity 27', '25', '2/5/18', '3/9/18', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 17),
(2966, 'A028', 'Activity 28', '2', '2/19/18', '2/20/18', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 17),
(2967, 'A029', 'Activity 29', '19', '2/23/18', '3/21/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 17),
(2968, 'A030', 'Activity 30', '16', '2/17/18', '3/12/18', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 17),
(2999, 'A001', 'Activity 01', '16', '10/10/17', '10/31/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 18),
(3000, 'A002', 'Activity 02', '7', '10/28/17', '11/7/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 18),
(3001, 'A003', 'Activity 03', '22', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 18),
(3002, 'A004', 'Activity 04', '25', '10/13/17', '11/16/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 18),
(3003, 'A005', 'Activity 05', '19', '10/15/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 18),
(3004, 'A006', 'Activity 06', '8', '11/17/17', '11/28/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 18),
(3005, 'A007', 'Activity 07', '8', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 18),
(3006, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 18),
(3007, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 18),
(3008, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 18),
(3009, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 18),
(3010, 'A012', 'Activity 12', '4', '2/1/18', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 18),
(3011, 'A013', 'Activity 13', '20', '12/18/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 18),
(3012, 'A014', 'Activity 14', '25', '12/20/17', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 18),
(3013, 'A015', 'Activity 15', '8', '11/17/17', '11/28/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 18),
(3014, 'A016', 'Activity 16', '10', '11/3/17', '11/16/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 18),
(3015, 'A017', 'Activity 17', '12', '11/12/17', '11/28/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 18),
(3016, 'A018', 'Activity 18', '20', '11/18/17', '12/15/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 18),
(3017, 'A019', 'Activity 19', '14', '11/27/17', '12/14/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 18),
(3018, 'A020', 'Activity 20', '21', '12/24/17', '1/22/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 18),
(3019, 'A021', 'Activity 21', '8', '12/3/17', '12/13/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 18),
(3020, 'A022', 'Activity 22', '5', '12/18/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 18),
(3021, 'A023', 'Activity 23', '7', '1/7/18', '1/16/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 18),
(3022, 'A024', 'Activity 24', '5', '1/19/18', '1/25/18', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 18),
(3023, 'A025', 'Activity 25', '20', '1/23/18', '2/19/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 18),
(3024, 'A026', 'Activity 26', '2', '1/2/18', '1/3/18', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 18),
(3025, 'A027', 'Activity 27', '25', '2/5/18', '3/9/18', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 18),
(3026, 'A028', 'Activity 28', '2', '2/19/18', '2/20/18', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 18),
(3027, 'A029', 'Activity 29', '19', '2/23/18', '3/21/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 18),
(3028, 'A030', 'Activity 30', '16', '2/17/18', '3/12/18', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 18),
(3029, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 19),
(3030, 'A002', 'Activity 02', '9', '10/27/17', '11/8/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 19),
(3031, 'A003', 'Activity 03', '22', '11/1/17', '11/30/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 19),
(3032, 'A004', 'Activity 04', '20', '10/12/17', '11/8/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 19),
(3033, 'A005', 'Activity 05', '21', '10/14/17', '11/13/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 19),
(3034, 'A006', 'Activity 06', '9', '11/17/17', '11/29/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 19),
(3035, 'A007', 'Activity 07', '9', '10/19/17', '10/31/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 19),
(3036, 'A008', 'Activity 08', '21', '12/3/17', '1/1/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 19),
(3037, 'A009', 'Activity 09', '6', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 19),
(3038, 'A010', 'Activity 10', '19', '1/24/18', '2/19/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 19),
(3039, 'A011', 'Activity 11', '14', '2/7/18', '2/26/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 19),
(3040, 'A012', 'Activity 12', '4', '1/23/18', '1/26/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 19),
(3041, 'A013', 'Activity 13', '20', '12/17/17', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 19),
(3042, 'A014', 'Activity 14', '25', '12/22/17', '1/25/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 19),
(3043, 'A015', 'Activity 15', '8', '11/19/17', '11/29/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 19),
(3044, 'A016', 'Activity 16', '10', '11/3/17', '11/16/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 19),
(3045, 'A017', 'Activity 17', '12', '11/14/17', '11/29/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 19),
(3046, 'A018', 'Activity 18', '21', '11/18/17', '12/18/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 19),
(3047, 'A019', 'Activity 19', '12', '11/27/17', '12/12/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 19),
(3048, 'A020', 'Activity 20', '21', '12/22/17', '1/19/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 19),
(3049, 'A021', 'Activity 21', '8', '12/4/17', '12/13/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 19),
(3050, 'A022', 'Activity 22', '5', '12/16/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 19),
(3051, 'A023', 'Activity 23', '7', '1/5/18', '1/15/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 19),
(3052, 'A024', 'Activity 24', '6', '1/21/18', '1/29/18', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 19),
(3053, 'A025', 'Activity 25', '20', '1/21/18', '2/16/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 19),
(3054, 'A026', 'Activity 26', '2', '1/3/18', '1/4/18', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 19),
(3055, 'A027', 'Activity 27', '25', '2/4/18', '3/9/18', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 19),
(3056, 'A028', 'Activity 28', '2', '2/21/18', '2/22/18', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 19),
(3057, 'A029', 'Activity 29', '19', '2/22/18', '3/20/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 19),
(3058, 'A030', 'Activity 30', '16', '2/18/18', '3/12/18', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 19),
(3059, 'A031', 'Activity 31', '12', '2/12/18', '2/27/18', '10', '', 'Todd', 'Floor 1', 'Medium', '', '', '89', 19),
(3060, 'A032', 'Activity 32', '16', '1/31/18', '2/21/18', '8', '', 'Stan', 'Floor 2', 'High', '', '', '89', 19),
(3061, '', '', '', '', '', '', '', '', '', '', '', '', '89', 19),
(3206, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 23),
(3207, 'A002', 'Activity 02', '9', '10/27/17', '11/8/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 23),
(3208, 'A003', 'Activity 03', '22', '11/1/17', '11/30/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 23),
(3209, 'A004', 'Activity 04', '20', '10/12/17', '11/8/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 23),
(3210, 'A005', 'Activity 05', '21', '10/14/17', '11/13/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 23),
(3211, 'A006', 'Activity 06', '10', '11/17/17', '11/30/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 23),
(3212, 'A007', 'Activity 07', '9', '10/19/17', '10/31/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 23),
(3213, 'A008', 'Activity 08', '22', '12/4/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 23),
(3214, 'A009', 'Activity 09', '6', '1/22/18', '1/29/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 23),
(3215, 'A010', 'Activity 10', '19', '1/22/18', '2/15/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 23),
(3216, 'A011', 'Activity 11', '14', '2/3/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 23),
(3217, 'A012', 'Activity 12', '8', '1/23/18', '2/1/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 23),
(3218, 'A013', 'Activity 13', '17', '12/17/17', '1/9/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 23),
(3219, 'A014', 'Activity 14', '27', '12/24/17', '1/30/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 23),
(3220, 'A015', 'Activity 15', '8', '11/19/17', '11/29/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 23),
(3221, 'A016', 'Activity 16', '10', '11/3/17', '11/16/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 23),
(3222, 'A017', 'Activity 17', '12', '11/14/17', '11/29/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 23),
(3223, 'A018', 'Activity 18', '19', '11/18/17', '12/14/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 23),
(3224, 'A019', 'Activity 19', '11', '11/27/17', '12/11/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 23),
(3225, 'A020', 'Activity 20', '21', '12/22/17', '1/19/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 23),
(3226, 'A021', 'Activity 21', '8', '12/6/17', '12/15/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 23),
(3227, 'A022', 'Activity 22', '5', '12/16/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 23),
(3228, 'A023', 'Activity 23', '9', '1/1/18', '1/11/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 23),
(3229, 'A024', 'Activity 24', '6', '1/23/18', '1/30/18', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 23),
(3230, 'A025', 'Activity 25', '20', '1/23/18', '2/19/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 23),
(3231, 'A026', 'Activity 26', '2', '1/3/18', '1/4/18', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 23),
(3232, 'A027', 'Activity 27', '25', '2/5/18', '3/9/18', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 23),
(3233, 'A028', 'Activity 28', '2', '2/24/18', '2/27/18', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 23),
(3234, 'A029', 'Activity 29', '19', '2/22/18', '3/20/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 23),
(3235, 'A030', 'Activity 30', '16', '2/21/18', '3/14/18', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 23),
(3236, 'A031', 'Activity 31', '14', '2/16/18', '3/7/18', '10', '', 'Todd', 'Floor 1', 'Medium', '', '', '89', 23),
(3237, 'A032', 'Activity 32', '16', '2/1/18', '2/22/18', '8', '', 'Stan', 'Floor 2', 'High', '', '', '89', 23),
(3238, 'A033', 'Activity 33', '10', '2/7/18', '2/20/18', '6', '', 'Steve', 'Floor 2', 'Low', '', '', '89', 23),
(3239, 'A034', 'Activity 34', '12', '1/29/18', '2/13/18', '14', '', 'Steve', 'Floor 1', 'Medium', '', '', '89', 23),
(3240, 'A036', 'Activity 36', '14', '1/21/18', '2/8/18', '0', '', 'Todd', 'Floor 2', 'Low', '', '', '89', 23),
(3241, 'A037', 'Activity 37', '10', '2/14/18', '2/27/18', '3', '', 'Stan', 'Floor 2', 'Low', '', '', '89', 23),
(3649, 'A001', 'Activity 01', '16', '10/9/17', '10/30/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 22),
(3650, 'A002', 'Activity 02', '9', '10/27/17', '11/8/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 22),
(3651, 'A003', 'Activity 03', '22', '11/1/17', '11/30/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 22),
(3652, 'A004', 'Activity 04', '20', '10/12/17', '11/8/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 22),
(3653, 'A005', 'Activity 05', '21', '10/14/17', '11/13/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 22),
(3654, 'A006', 'Activity 06', '10', '11/17/17', '11/30/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 22),
(3655, 'A007', 'Activity 07', '9', '10/19/17', '10/31/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 22);
INSERT INTO `tbl_activity` (`id`, `activity_id`, `activity_name`, `duration`, `start`, `finish`, `size`, `color`, `code`, `location`, `priority`, `url`, `note`, `pid`, `sid`) VALUES
(3656, 'A008', 'Activity 08', '23', '12/4/17', '1/3/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 22),
(3657, 'A009', 'Activity 09', '6', '1/24/18', '1/31/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 22),
(3658, 'A010', 'Activity 10', '19', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 22),
(3659, 'A011', 'Activity 11', '14', '2/3/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 22),
(3660, 'A012', 'Activity 12', '9', '1/23/18', '2/2/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 22),
(3661, 'A013', 'Activity 13', '17', '12/17/17', '1/9/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 22),
(3662, 'A014', 'Activity 14', '27', '12/24/17', '1/30/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 22),
(3663, 'A015', 'Activity 15', '8', '11/19/17', '11/29/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 22),
(3664, 'A016', 'Activity 16', '10', '11/3/17', '11/16/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 22),
(3665, 'A017', 'Activity 17', '12', '11/14/17', '11/29/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 22),
(3666, 'A018', 'Activity 18', '19', '11/18/17', '12/14/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 22),
(3667, 'A019', 'Activity 19', '11', '11/27/17', '12/11/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 22),
(3668, 'A020', 'Activity 20', '21', '12/22/17', '1/19/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 22),
(3669, 'A021', 'Activity 21', '8', '12/6/17', '12/15/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 22),
(3670, 'A022', 'Activity 22', '5', '12/16/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 22),
(3671, 'A023', 'Activity 23', '9', '1/2/18', '1/12/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 22),
(3672, 'A024', 'Activity 24', '6', '1/24/18', '1/31/18', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 22),
(3673, 'A025', 'Activity 25', '20', '1/24/18', '2/20/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 22),
(3674, 'A026', 'Activity 26', '2', '1/4/18', '1/5/18', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 22),
(3675, 'A027', 'Activity 27', '25', '2/5/18', '3/9/18', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 22),
(3676, 'A028', 'Activity 28', '2', '2/24/18', '2/27/18', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 22),
(3677, 'A029', 'Activity 29', '19', '2/22/18', '3/20/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 22),
(3678, 'A030', 'Activity 30', '16', '2/21/18', '3/14/18', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 22),
(3679, 'A031', 'Activity 31', '14', '2/16/18', '3/7/18', '10', '', 'Todd', 'Floor 1', 'Medium', '', '', '89', 22),
(3680, 'A032', 'Activity 32', '16', '2/1/18', '2/22/18', '8', '', 'Stan', 'Floor 2', 'High', '', '', '89', 22),
(3681, 'A033', 'Activity 33', '10', '2/7/18', '2/20/18', '6', '', 'Steve', 'Floor 2', 'Low', '', '', '89', 22),
(3682, 'A034', 'Activity 34', '12', '1/29/18', '2/13/18', '14', '', 'Steve', 'Floor 1', 'Medium', '', '', '89', 22),
(3683, 'A036', 'Activity 36', '14', '1/21/18', '2/8/18', '0', '', 'Todd', 'Floor 2', 'Low', '', '', '89', 22),
(3684, 'A037', 'Activity 37', '10', '2/14/18', '2/27/18', '3', '', 'Stan', 'Floor 2', 'Low', '', '', '89', 22),
(3685, 'ST00440', 'Prep Slab/Pour 2 (J-R)', '5', '', '', '3', '', 'Concrete', 'Area A', 'High', 'www.slatplanner.com', 'Random notesâ€¦', '90', 0),
(3686, 'ST00450', 'Prep Slab/Pour 3 (R-Y)', '5', '', '', '11', '', 'Concrete', 'Area B', 'Medium', 'www.procore.com', '', '90', 0),
(3687, 'ST00570', 'Erect and Detail Canopy', '2', '', '', '8', '', 'Steel', 'Area C', 'Low', '', 'Any info here.', '90', 0),
(3688, 'ST00580', 'Deck Canopy', '3', '', '', '13', '', 'Steel', 'Area B', 'Medium', '', '', '90', 0),
(3689, 'ST00600', 'SOMD Floor 2 (M-U)', '5', '', '', '6', '', 'Concrete', 'Area B', 'Medium', '', '', '90', 0),
(3690, 'ST00601', 'SOMD Floor 3 (M-U)', '5', '', '', '3', '', 'Concrete', 'Area B', 'Medium', '', '', '90', 0),
(3691, 'ST00605', 'SOMD Floor 4 (M-U)', '5', '', '', '14', '', 'Concrete', 'Area C', 'Low', '', '', '90', 0),
(3692, 'ST00616', 'SOMD Roof (M-U)', '5', '', '', '3', '', 'Concrete', 'Area C', 'Low', 'www.procore.com', 'Testing notes.', '90', 0),
(3693, 'ST00625', 'Exterior Framing & Sheathing - NE', '7', '', '', '5', '', 'Framing', 'Area A', 'Low', 'www.assemble.com', 'Testing notes.', '90', 0),
(3694, 'ST00627', 'Exterior Framing & Sheathing - SW', '9', '', '', '8', '', 'Framing', 'Area A', 'High', '', '', '90', 0),
(3695, 'ST00630', 'Fluid Applied Barrier', '40', '', '', '10', '', 'Framing', 'Area A', 'High', '', '', '90', 0),
(3696, 'ST00710', 'Rain Water Leaders and risers', '15', '', '', '9', '', 'Roofing', 'Area A', 'High', '', '', '90', 0),
(3697, 'ST00730', 'Roof - Metal', '10', '', '', '4', '', 'Roofing', 'Area A', 'Low', 'www.slatplanner.com', 'Any info here.', '90', 0),
(3698, 'ST00770', 'Brick Masonry and Stone Cladding - NW', '25', '', '', '1', '', 'Masonry', 'Area C', 'Medium', '', '', '90', 0),
(3699, 'ST00880', 'Install Scaffolding - NW', '4', '', '', '6', '', 'Scaffolding', 'Area B', 'Medium', 'www.assemble.com', '', '90', 0),
(3700, 'ST00950', 'Exterior Grade Beams (8-14) - Garage', '5', '', '', '8', '', 'Concrete', 'Area B', 'Low', 'www.slatplanner.com', 'Any info here.', '90', 0),
(3701, 'ST00965', 'Rough-In Slab (8-14) - Garage', '2', '', '', '12', '', 'MEP', 'Area B', 'Low', '', '', '90', 0),
(3702, 'ST00984', 'Prep and Pour Ramp and Level 1 (8-14) - Garage', '11', '', '', '11', '', 'Concrete', 'Area B', 'Low', '', '', '90', 0),
(3703, 'ST01015', 'Prep and Pour Ramp and SOG (8-14) - Garage', '5', '', '', '15', '', 'Concrete', 'Area B', 'High', '', '', '90', 0),
(3704, 'ST01080', 'Monumental Stair - F1', '10', '', '', '8', '', 'Steel', 'Area C', 'High', '', '', '90', 0),
(3705, 'ST01140', 'Overhead HVAC RI - F1', '15', '', '', '2', '', 'HVAC', 'Area C', 'High', '', '', '90', 0),
(3706, 'ST01150', 'Overhead Hydronic RI - F1', '10', '', '', '5', '', 'HVAC', 'Area C', 'High', 'www.slatplanner.com', 'Any info here.', '90', 0),
(3707, 'ST01160', 'Overhead Plumbing RI - F1', '20', '', '', '2', '', 'Plumbing', 'Area C', 'High', '', 'Any info here.', '90', 0),
(3708, 'ST01170', 'Overhead Electrical RI - F1', '15', '', '', '9', '', 'Electrical', 'Area A', 'Low', '', '', '90', 0),
(3709, 'ST01180', 'Overhead FP RI - F1', '15', '', '', '12', '', 'Plumbing', 'Area A', 'Low', '', '', '90', 0),
(3710, 'ST01190', 'In wall MEP RI - F1', '15', '', '', '13', '', 'MEP', 'Area A', 'Medium', 'www.procore.com', 'Random notesâ€¦', '90', 0),
(3711, 'ST01200', 'Frame interior walls and soffits - F1', '10', '', '', '5', '', 'Framing', 'Area A', 'Medium', 'www.assemble.com', 'Random notesâ€¦', '90', 0),
(3712, 'ST01210', 'RF shielding - F1', '5', '', '', '8', '', 'Electrical', 'Area C', 'Medium', '', '', '90', 0),
(3713, 'ST01220', 'Install VAVs/complete branch lines - F1', '10', '', '', '5', '', 'HVAC', 'Area B', 'Medium', '', '', '90', 0),
(3714, 'ST01230', 'Rough-in soffits and ceilings - F1', '10', '', '', '10', '', 'MEP', 'Area B', 'Medium', 'www.assemble.com', '', '90', 0),
(3715, 'ST01240', 'Insulate Overhead - F1', '10', '', '', '8', '', 'Insulation', 'Area B', 'High', '', '', '90', 0),
(3716, 'ST01250', 'Insulate In wall - F1', '5', '', '', '12', '', 'Insulation', 'Area A', 'High', 'www.procore.com', 'Any info here.', '90', 0),
(3717, 'ST01560', 'Frame and top out priority walls - F2', '14', '', '', '3', '', 'Framing', 'Area A', 'High', 'www.assemble.com', 'Any info here.', '90', 0),
(3718, 'ST01570', 'Overhead HVAC RI - F2', '25', '', '', '5', '', 'HVAC', 'Area A', 'High', '', '', '90', 0),
(3719, 'ST01590', 'Overhead Plumbing RI - F2', '15', '', '', '5', '', 'Plumbing', 'Area A', 'High', '', '', '90', 0),
(3720, 'ST01600', 'Overhead Electrical RI - F2', '26', '', '', '14', '', 'Electrical', 'Area A', 'Medium', 'www.assemble.com', 'Random notesâ€¦', '90', 0),
(3721, 'ST01630', 'Frame interior walls and soffits - F2', '17', '', '', '3', '', 'Framing', 'Area A', 'Medium', 'www.slatplanner.com', '', '90', 0),
(3722, 'ST01650', 'Rough-in soffits and ceilings - F2', '10', '', '', '8', '', 'MEP', 'Area B', 'Medium', '', '', '90', 0),
(3723, 'ST02080', 'Frame and top out priority walls - F4', '14', '', '', '14', '', 'Framing', 'Area B', 'Low', '', 'Random notesâ€¦', '90', 0),
(3724, 'ST02090', 'Overhead HVAC RI - F4', '25', '', '', '9', '', 'HVAC', 'Area C', 'Low', 'www.slatplanner.com', '', '90', 0),
(3725, 'ST02110', 'Overhead Plumbing RI - F4', '12', '', '', '1', '', 'Plumbing', 'Area C', 'Low', 'www.procore.com', 'Random notesâ€¦', '90', 0),
(3726, 'TEst', 'test', '', '', '', '', '', '', '', '', '', '', '91', 0),
(3992, 'A001', 'Test 001', '0', '12/13/17', '', '5', '', 'Steve', 'Floor 1', 'High', '', '', '99', 0),
(3993, 'A002', 'Test 002', '0', '', '12/3/17', '4', '', 'Stan', 'Floor 2', 'Medium', '', '', '99', 0),
(3994, 'A003', 'Test 003', '', '', '12/3/17', '', '', '', '', '', '', '', '99', 0),
(3995, '', '', '', '', '', '', '', '', '', '', '', '', '99', 0),
(4400, 'A001', 'Excavate Area A', '', '', '', '4', '', '', '', '', '', '', '94', 0),
(4401, 'A002', 'Excavate Area B', '', '', '', '4', '', '', '', '', '', '', '94', 0),
(4402, 'A003', 'Excavate Area C', '', '', '', '4', '', '', '', '', '', '', '94', 0),
(4403, 'A004', 'Form Area A', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4404, 'A005', 'Form Area B', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4405, 'A006', 'Form Area C', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4406, 'A007', 'Rebar Area A', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4407, 'A008', 'Rebar Area B', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4408, 'A009', 'Rebar Area C', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4409, 'A010', 'Pour Area A', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4410, 'A011', 'Pour Area B', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4411, 'A012', 'Pour Area C', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4412, 'A013', 'Strip Area A', '', '', '', '4', '', '', '', '', '', '', '94', 0),
(4413, 'A014', 'Strip Area B', '', '', '', '4', '', '', '', '', '', '', '94', 0),
(4414, 'A015', 'Strip Area C', '', '', '', '4', '', '', '', '', '', '', '94', 0),
(4415, 'A016', 'Erect Steel Area A', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4416, 'A017', 'Erect Steel Area B', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4417, 'A018', 'Erect Steel Area C', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4418, 'A019', 'Metal Decking Area A', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4419, 'A020', 'Metal Decking Area B', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4420, 'A021', 'Metal Decking Area C', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4421, 'A022', 'SOMD Area A', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4422, 'A023', 'SOMD Area B', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4423, 'A024', 'SOMD Area C', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4424, 'A025', 'Exterior Framing Area A', '', '', '', '7', '', '', '', '', '', '', '94', 0),
(4425, 'A026', 'Exterior Framing Area B', '', '', '', '7', '', '', '', '', '', '', '94', 0),
(4426, 'A027', 'Exterior Framing Area C', '', '', '', '7', '', '', '', '', '', '', '94', 0),
(4427, 'A028', 'Sheathing Area A', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4428, 'A029', 'Sheathing Area B', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4429, 'A030', 'Sheathing Area C', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4430, 'A031', 'Interior Framing Area A', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4431, 'A032', 'Interior Framing Area B', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4432, 'A033', 'Interior Framing Area C', '', '', '', '6', '', '', '', '', '', '', '94', 0),
(4433, 'A034', 'Rough HVAC Area A', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4434, 'A035', 'Rough HVAC Area B', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4435, 'A036', 'Rough HVAC Area C', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4436, 'A037', 'Rough Plumbing Area A', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4437, 'A038', 'Rough Plumbing Area B', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4438, 'A039', 'Rough Plumbing Area C', '', '', '', '5', '', '', '', '', '', '', '94', 0),
(4439, 'A040', 'Interior Layout', '', '', '', '2', '', '', '', '', '', '', '94', 0),
(4440, 'M001', 'Notice to Proceed', '', '', '', '', '', '', '', '', '', '', '94', 0),
(4441, 'M002', 'Begin Structure', '', '', '', '', '', '', '', '', '', '', '94', 0),
(4442, 'M003', 'Structure Complete', '', '', '', '', '', '', '', '', '', '', '94', 0),
(4443, 'M004', 'Foundation Complete', '', '', '', '', '', '', '', '', '', '', '94', 0),
(4611, 'A001', 'Activity 01', '7', '10/10/17', '10/18/17', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '92', 0),
(4612, 'A002', 'Activity 02', '0', '', '1/2/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '92', 0),
(4613, 'A003', 'Activity 03', '5', '10/15/17', '10/20/17', '4', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '92', 0),
(4614, 'A004', 'Activity 04', '14', '10/2/17', '10/19/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '92', 0),
(4615, 'A005', 'Activity 05', '0', '10/1/17', '', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '92', 0),
(4616, 'A006', 'Activity 06', '0', '', '1/2/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '92', 0),
(4617, 'A007', 'Activity 07', '0', '', '10/19/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '92', 0),
(4618, 'A008', 'Activity 08', '22', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '92', 0),
(4619, 'A009', 'Activity 09', '0', '1/2/17', '', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '92', 0),
(4620, 'A010', 'Activity 10', '10', '1/23/18', '2/5/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '92', 0),
(4621, 'A011', 'Activity 11', '14', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '92', 0),
(4622, 'A012', 'Activity 12', '0', '', '1/3/17', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '92', 0),
(4623, 'A013', 'Activity 13', '11', '12/18/17', '1/1/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '92', 0),
(4624, 'A014', 'Activity 14', '16', '12/20/17', '1/10/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '92', 0),
(4625, 'A015', 'Activity 15', '0', '11/5/17', '', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '92', 0),
(4626, 'A016', 'Activity 16', '0', '', '1/3/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '92', 0),
(4627, 'A017', 'Activity 17', '12', '11/12/17', '11/28/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '92', 0),
(4628, 'A018', 'Activity 18', '20', '11/18/17', '12/15/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '92', 0),
(4629, 'A019', 'Activity 19', '5', '11/27/17', '12/1/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '92', 0),
(4630, 'A020', 'Activity 20', '21', '12/24/17', '1/22/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '92', 0),
(4631, 'A021', 'Activity 21', '8', '12/3/17', '12/13/17', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '92', 0),
(4632, 'A022', 'Activity 22', '0', '1/2/17', '', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '92', 0),
(4633, 'A023', 'Activity 23', '7', '1/7/17', '1/17/17', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '92', 0),
(4634, 'A024', 'Activity 24', '1', '1/12/17', '1/12/17', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '92', 0),
(4635, 'A025', 'Activity 25', '11', '1/23/17', '2/6/17', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '92', 0),
(4636, 'A026', 'Activity 26', '3', '1/22/17', '1/25/17', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '92', 0),
(4637, 'A027', 'Activity 27', '25', '2/5/17', '3/10/17', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '92', 0),
(4638, 'A028', 'Activity 28', '2', '2/19/17', '2/21/17', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '92', 0),
(4639, 'A029', 'Activity 29', '7', '2/23/17', '3/3/17', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '92', 0),
(4640, 'A030', 'Activity 30', '7', '2/17/17', '2/27/17', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '92', 0),
(4758, 'ST00440', 'Prep Slab/Pour 2 (J-R)', '0', '', '', '3', '', 'Concrete', 'Area A', 'High', 'www.slatplanner.com', 'Random notesâ€¦', '100', 0),
(4759, 'ST00450', 'Prep Slab/Pour 3 (R-Y)', '0', '', '', '11', '', 'Concrete', 'Area B', 'Medium', 'www.procore.com', '', '100', 0),
(4760, 'ST00570', 'Erect and Detail Canopy', '0', '', '', '8', '', 'Steel', 'Area C', 'Low', '', 'Any info here.', '100', 0),
(4761, 'ST00580', 'Deck Canopy', '0', '', '', '13', '', 'Steel', 'Area B', 'Medium', '', '', '100', 0),
(4762, 'ST00600', 'SOMD Floor 2 (M-U)', '0', '', '', '6', '', 'Concrete', 'Area B', 'Medium', '', '', '100', 0),
(4763, 'ST00601', 'SOMD Floor 3 (M-U)', '0', '', '', '3', '', 'Concrete', 'Area B', 'Medium', '', '', '100', 0),
(4764, 'ST00605', 'SOMD Floor 4 (M-U)', '0', '', '', '14', '', 'Concrete', 'Area C', 'Low', '', '', '100', 0),
(4765, 'ST00616', 'SOMD Roof (M-U)', '0', '', '', '3', '', 'Concrete', 'Area C', 'Low', 'www.procore.com', 'Testing notes.', '100', 0),
(4766, 'ST00625', 'Exterior Framing & Sheathing - NE', '0', '', '', '5', '', 'Framing', 'Area A', 'Low', 'www.assemble.com', 'Testing notes.', '100', 0),
(4767, 'ST00627', 'Exterior Framing & Sheathing - SW', '0', '', '', '8', '', 'Framing', 'Area A', 'High', '', '', '100', 0),
(4768, 'ST00630', 'Fluid Applied Barrier', '0', '', '', '10', '', 'Framing', 'Area A', 'High', '', '', '100', 0),
(4769, 'ST00710', 'Rain Water Leaders and risers', '0', '', '', '9', '', 'Roofing', 'Area A', 'High', '', '', '100', 0),
(4770, 'ST00730', 'Roof - Metal', '0', '', '', '4', '', 'Roofing', 'Area A', 'Low', 'www.slatplanner.com', 'Any info here.', '100', 0),
(4771, 'ST00770', 'Brick Masonry and Stone Cladding - NW', '0', '', '', '1', '', 'Masonry', 'Area C', 'Medium', '', '', '100', 0),
(4772, 'ST00880', 'Install Scaffolding - NW', '0', '', '', '6', '', 'Scaffolding', 'Area B', 'Medium', 'www.assemble.com', '', '100', 0),
(4773, 'ST00950', 'Exterior Grade Beams (8-14) - Garage', '0', '', '', '8', '', 'Concrete', 'Area B', 'Low', 'www.slatplanner.com', 'Any info here.', '100', 0),
(4774, 'ST00965', 'Rough-In Slab (8-14) - Garage', '0', '', '', '12', '', 'MEP', 'Area B', 'Low', '', '', '100', 0),
(4775, 'ST00984', 'Prep and Pour Ramp and Level 1 (8-14) - Garage', '0', '', '', '11', '', 'Concrete', 'Area B', 'Low', '', '', '100', 0),
(4776, 'ST01015', 'Prep and Pour Ramp and SOG (8-14) - Garage', '0', '', '', '15', '', 'Concrete', 'Area B', 'High', '', '', '100', 0),
(4777, 'ST01080', 'Monumental Stair - F1', '0', '', '', '8', '', 'Steel', 'Area C', 'High', '', '', '100', 0),
(4778, 'ST01140', 'Overhead HVAC RI - F1', '0', '', '', '2', '', 'HVAC', 'Area C', 'High', '', '', '100', 0),
(4779, 'ST01150', 'Overhead Hydronic RI - F1', '0', '', '', '5', '', 'HVAC', 'Area C', 'High', 'www.slatplanner.com', 'Any info here.', '100', 0),
(4780, 'ST01160', 'Overhead Plumbing RI - F1', '0', '', '', '2', '', 'Plumbing', 'Area C', 'High', '', 'Any info here.', '100', 0),
(4781, 'ST01170', 'Overhead Electrical RI - F1', '0', '', '', '9', '', 'Electrical', 'Area A', 'Low', '', '', '100', 0),
(4782, 'ST01180', 'Overhead FP RI - F1', '0', '', '', '12', '', 'Plumbing', 'Area A', 'Low', '', '', '100', 0),
(4783, 'ST01190', 'In wall MEP RI - F1', '0', '', '', '13', '', 'MEP', 'Area A', 'Medium', 'www.procore.com', 'Random notesâ€¦', '100', 0),
(4784, 'ST01200', 'Frame interior walls and soffits - F1', '0', '', '', '5', '', 'Framing', 'Area A', 'Medium', 'www.assemble.com', 'Random notesâ€¦', '100', 0),
(4785, 'ST01210', 'RF shielding - F1', '0', '', '', '8', '', 'Electrical', 'Area C', 'Medium', '', '', '100', 0),
(4786, 'ST01220', 'Install VAVs/complete branch lines - F1', '0', '', '', '5', '', 'HVAC', 'Area B', 'Medium', '', '', '100', 0),
(4787, 'ST01230', 'Rough-in soffits and ceilings - F1', '0', '', '', '10', '', 'MEP', 'Area B', 'Medium', 'www.assemble.com', '', '100', 0),
(4788, 'ST01240', 'Insulate Overhead - F1', '0', '', '', '8', '', 'Insulation', 'Area B', 'High', '', '', '100', 0),
(4789, 'ST01250', 'Insulate In wall - F1', '0', '', '', '12', '', 'Insulation', 'Area A', 'High', 'www.procore.com', 'Any info here.', '100', 0),
(4790, 'ST01560', 'Frame and top out priority walls - F2', '0', '', '', '3', '', 'Framing', 'Area A', 'High', 'www.assemble.com', 'Any info here.', '100', 0),
(4791, 'ST01570', 'Overhead HVAC RI - F2', '0', '', '', '5', '', 'HVAC', 'Area A', 'High', '', '', '100', 0),
(4792, 'ST01590', 'Overhead Plumbing RI - F2', '0', '', '', '5', '', 'Plumbing', 'Area A', 'High', '', '', '100', 0),
(4793, 'ST01600', 'Overhead Electrical RI - F2', '0', '', '', '14', '', 'Electrical', 'Area A', 'Medium', 'www.assemble.com', 'Random notesâ€¦', '100', 0),
(4794, 'ST01630', 'Frame interior walls and soffits - F2', '0', '', '', '3', '', 'Framing', 'Area A', 'Medium', 'www.slatplanner.com', '', '100', 0),
(4795, 'ST01650', 'Rough-in soffits and ceilings - F2', '0', '', '', '8', '', 'MEP', 'Area B', 'Medium', '', '', '100', 0),
(4796, 'ST02080', 'Frame and top out priority walls - F4', '0', '', '', '14', '', 'Framing', 'Area B', 'Low', '', 'Random notesâ€¦', '100', 0),
(4797, 'ST02090', 'Overhead HVAC RI - F4', '0', '', '', '9', '', 'HVAC', 'Area C', 'Low', 'www.slatplanner.com', '', '100', 0),
(4798, 'ST02110', 'Overhead Plumbing RI - F4', '0', '', '', '1', '', 'Plumbing', 'Area C', 'Low', 'www.procore.com', 'Random notesâ€¦', '100', 0),
(4989, 'A001', 'Activity 01', '', '', '12/20/2017', '12', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '88', 0),
(4990, 'A002', 'Activity 02', '', '12/20/2017', '12/22/2017', '1', '', 'Todd', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 02', '88', 0),
(4991, 'A003', 'Activity 03', '', '11/2/17', '12/1/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '88', 0),
(4992, 'A004', 'Activity 04', '', '10/12/17', '11/15/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '88', 0),
(4993, 'A005', 'Activity 05', '', '10/14/17', '11/9/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '88', 0),
(4994, 'A006', 'Activity 06', '', '11/14/17', '11/23/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '88', 0),
(4995, 'A007', 'Activity 07', '', '10/19/17', '10/30/17', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '88', 0),
(4996, 'A008', 'Activity 08', '', '12/2/17', '1/2/18', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '88', 0),
(4997, 'A009', 'Activity 09', '', '1/18/18', '1/25/18', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '88', 0),
(4998, 'A010', 'Activity 10', '', '1/23/18', '2/16/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '88', 0),
(4999, 'A011', 'Activity 11', '', '2/4/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '88', 0),
(5000, 'A012', 'Activity 12', '', '12/6/2017', '2/6/18', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '88', 0),
(5001, 'A013', 'Activity 13', '', '12/6/2017', '1/12/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '88', 0),
(5002, 'A014', 'Activity 14', '', '12/6/2017', '1/23/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '88', 0),
(5114, 'A001', 'Activity 01', '', '', '11/29/17', '12', '', 'Steve', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 01', '89', 0),
(5115, 'A002', 'Activity 02', '', '', '11/1/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 02', '89', 0),
(5116, 'A003', 'Activity 03', '', '11/1/17', '11/8/17', '4', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 03', '89', 0),
(5117, 'A004', 'Activity 04', '', '10/12/17', '10/23/17', '2', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 04', '89', 0),
(5118, 'A005', 'Activity 05', '', '10/14/17', '11/6/17', '8', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 05', '89', 0),
(5119, 'A006', 'Activity 06', '', '11/17/17', '11/17/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 06', '89', 0),
(5120, 'A007', 'Activity 07', '', '10/19/17', '', '10', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 07', '89', 0),
(5121, 'A008', 'Activity 08', '', '12/4/17', '12/19/17', '1', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 08', '89', 0),
(5122, 'A009', 'Activity 09', '', '1/22/18', '', '10', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 09', '89', 0),
(5123, 'A010', 'Activity 10', '', '1/22/18', '2/1/18', '3', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 10', '89', 0),
(5124, 'A011', 'Activity 11', '', '2/3/18', '2/22/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 11', '89', 0),
(5125, 'A012', 'Activity 12', '', '1/23/18', '', '8', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 12', '89', 0),
(5126, 'A013', 'Activity 13', '', '12/17/17', '1/9/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 13', '89', 0),
(5127, 'A014', 'Activity 14', '', '12/24/17', '1/30/18', '12', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 14', '89', 0),
(5128, 'A015', 'Activity 15', '', '11/19/17', '11/29/17', '11', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 15', '89', 0),
(5129, 'A016', 'Activity 16', '', '', '11/3/17', '1', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 16', '89', 0),
(5130, 'A017', 'Activity 17', '', '11/14/17', '11/15/17', '5', '', 'Todd', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 17', '89', 0),
(5131, 'A018', 'Activity 18', '', '11/18/17', '12/14/17', '12', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 18', '89', 0),
(5132, 'A019', 'Activity 19', '', '11/27/17', '11/27/17', '1', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 19', '89', 0),
(5133, 'A020', 'Activity 20', '', '12/22/17', '1/5/18', '11', '', 'Stan', 'Floor 1', 'High', 'www.slatplanner.com/test', 'Notes for Activity 20', '89', 0),
(5134, 'A021', 'Activity 21', '', '12/6/17', '', '5', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 21', '89', 0),
(5135, 'A022', 'Activity 22', '', '12/16/17', '12/22/17', '13', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 22', '89', 0),
(5136, 'A023', 'Activity 23', '', '1/1/18', '', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 23', '89', 0),
(5137, 'A024', 'Activity 24', '', '1/23/18', '', '6', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 24', '89', 0),
(5138, 'A025', 'Activity 25', '', '1/23/18', '2/9/18', '6', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 25', '89', 0),
(5139, 'A026', 'Activity 26', '', '2/15/18', '', '15', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 26', '89', 0),
(5140, 'A027', 'Activity 27', '', '2/6/18', '2/23/18', '5', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 27', '89', 0),
(5141, 'A028', 'Activity 28', '', '2/24/18', '2/27/18', '11', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 28', '89', 0),
(5142, 'A029', 'Activity 29', '', '2/22/18', '3/2/18', '15', '', 'Steve', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 29', '89', 0),
(5143, 'A030', 'Activity 30', '', '2/21/18', '2/26/18', '14', '', 'Todd', 'Floor 2', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 0),
(5144, 'A031', 'Activity 31', '', '2/16/18', '2/21/18', '10', '', 'Todd', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 0),
(5145, 'A032', 'Activity 32', '', '2/4/18', '2/26/18', '8', '', 'Stan', 'Floor 2', 'High', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 0),
(5146, 'A033', 'Activity 33', '', '2/7/18', '2/7/18', '6', '', 'Steve', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 0),
(5147, 'A034', 'Activity 34', '', '1/29/18', '1/30/18', '14', '', 'Steve', 'Floor 1', 'Medium', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 0),
(5148, 'A036', 'Activity 36', '', '1/21/18', '2/6/18', '0', '', 'Todd', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 0),
(5149, 'A037', 'Activity 37', '', '2/14/18', '2/14/18', '3', '', 'Stan', 'Floor 2', 'Low', 'www.slatplanner.com/test', 'Notes for Activity 30', '89', 0),
(5150, 'Atest', 'Very Long Activity Description', '', '2/22/18', '3/2/18', '2', '', 'Steve', 'Floor 1', 'Low', '', '', '89', 0),
(5415, 'A001', 'Excavate Area A', '', '2/11/2018', '2/13/18', '4', '', 'Stan', 'Area A', 'High', '', '', '102', 0),
(5416, 'A002', 'Form Foundations Area A', '', '2/14/2018', '2/16/2018', '5', '', 'Paul', 'Area A', 'High', '', '', '102', 0),
(5417, 'A003', 'Rebar Foundations Area A', '', '2/17/2018', '2/20/18', '6', '', 'Paul', 'Area A', 'High', '', '', '102', 0),
(5418, 'A004', 'Pour Foundations Area A', '', '2/21/2018', '2/21/18', '7', '', 'Paul', 'Area A', 'High', '', '', '102', 0),
(5419, 'A005', 'Strip Foundations Area A', '', '2/22/2018', '2/22/18', '3', '', 'Paul', 'Area A', 'Low', '', '', '102', 0),
(5420, 'A006', 'Erect Steel Area A', '', '2/23/2018', '2/26/2018', '6', '', 'Sue', 'Area A', 'High', '', '', '102', 0),
(5421, 'A007', 'Metal Decking Area A', '', '2/27/2018', '3/1/2018', '5', '', 'Sue', 'Area A', 'Medium', '', '', '102', 0),
(5422, 'A008', 'Form and Pour SOMD Area A', '', '3/2/2018', '3/2/18', '6', '', 'Paul', 'Area A', 'Medium', '', '', '102', 0),
(5423, 'A009', 'Exterior Framing Area A', '', '3/4/2018', '3/5/18', '6', '', 'John', 'Area A', 'Low', '', '', '102', 0),
(5424, 'A010', 'Exterior Sheathing Area A', '', '3/6/2018', '3/6/18', '5', '', 'John', 'Area A', 'Low', '', '', '102', 0),
(5425, 'A011', 'Interior Framing Area A', '', '3/9/2018', '3/9/18', '6', '', 'John', 'Area A', 'High', '', '', '102', 0),
(5426, 'A012', 'Rough HVAC Area A', '', '3/5/2018', '3/5/18', '5', '', 'Ted', 'Area A', 'High', '', '', '102', 0),
(5427, 'A013', 'Rough Plumbing Area A', '', '3/7/2018', '3/7/18', '5', '', 'Tom', 'Area A', 'High', '', '', '102', 0),
(5428, 'A014', 'Excavate Area B', '', '2/12/2018', '2/13/18', '4', '', 'Stan', 'Area B', 'High', '', '', '102', 0),
(5429, 'A015', 'Form Foundations Area B', '', '2/15/2018', '2/16/18', '5', '', 'Paul', 'Area B', 'High', '', '', '102', 0),
(5430, 'A016', 'Rebar Foundations Area B', '', '2/18/2018', '2/21/18', '6', '', 'Paul', 'Area B', 'High', '', '', '102', 0),
(5431, 'A017', 'Pour Foundations Area B', '', '2/22/2018', '2/22/18', '7', '', 'Paul', 'Area B', 'High', '', '', '102', 0),
(5432, 'A018', 'Strip Foundations Area B', '', '2/23/2018', '2/23/18', '3', '', 'Paul', 'Area B', 'Low', '', '', '102', 0),
(5433, 'A019', 'Erect Steel Area B', '', '2/24/2018', '2/27/2018', '6', '', 'Sue', 'Area B', 'High', '', '', '102', 0),
(5434, 'A020', 'Metal Decking Area B', '', '2/28/2018', '3/1/18', '5', '', 'Sue', 'Area B', 'Medium', '', '', '102', 0),
(5435, 'A021', 'Form and Pour SOMD Area B', '', '3/3/2018', '3/5/18', '6', '', 'Paul', 'Area B', 'Medium', '', '', '102', 0),
(5436, 'A022', 'Exterior Framing Area B', '', '3/5/2018', '3/5/18', '6', '', 'John', 'Area B', 'Low', '', '', '102', 0),
(5437, 'A023', 'Exterior Sheathing Area B', '', '3/7/2018', '3/7/18', '5', '', 'John', 'Area B', 'Low', '', '', '102', 0),
(5438, 'A024', 'Interior Framing Area B', '', '3/10/2018', '3/12/18', '6', '', 'John', 'Area B', 'High', '', '', '102', 0),
(5439, 'A025', 'Rough HVAC Area B', '', '3/6/2018', '3/6/18', '5', '', 'Ted', 'Area B', 'High', '', '', '102', 0),
(5440, 'A026', 'Rough Plumbing Area B', '', '3/8/2018', '3/8/18', '5', '', 'Tom', 'Area B', 'High', '', '', '102', 0),
(5441, 'A027', 'Excavate Area C', '', '2/13/2018', '2/14/18', '4', '', 'Stan', 'Area C', 'High', '', '', '102', 0),
(5442, 'A028', 'Form Foundations Area C', '', '2/16/2018', '2/16/18', '5', '', 'Paul', 'Area C', 'High', '', '', '102', 0),
(5443, 'A029', 'Rebar Foundations Area C', '', '2/19/2018', '2/21/18', '6', '', 'Paul', 'Area C', 'High', '', '', '102', 0),
(5444, 'A030', 'Pour Foundations Area C', '', '2/23/2018', '2/23/18', '7', '', 'Paul', 'Area C', 'High', '', '', '102', 0),
(5445, 'A031', 'Strip Foundations Area C', '', '2/24/2018', '2/26/18', '3', '', 'Paul', 'Area C', 'Low', '', '', '102', 0),
(5446, 'A032', 'Erect Steel Area C', '', '2/25/2018', '2/28/18', '6', '', 'Sue', 'Area C', 'High', '', '', '102', 0),
(5447, 'A033', 'Metal Decking Area C', '', '3/1/2018', '3/2/18', '5', '', 'Sue', 'Area C', 'Medium', '', '', '102', 0),
(5448, 'A034', 'Form and Pour SOMD Area C', '', '3/4/2018', '3/5/18', '6', '', 'Paul', 'Area C', 'Medium', '', '', '102', 0),
(5449, 'A035', 'Exterior Framing Area C', '', '3/6/2018', '3/6/18', '6', '', 'John', 'Area C', 'Low', '', '', '102', 0),
(5450, 'A036', 'Exterior Sheathing Area C', '', '3/8/2018', '3/8/18', '5', '', 'John', 'Area C', 'Low', '', '', '102', 0),
(5451, 'A037', 'Interior Framing Area C', '', '3/11/2018', '3/12/2018', '6', '', 'John', 'Area C', 'High', '', '', '102', 0),
(5452, 'A038', 'Rough HVAC Area C', '', '3/7/2018', '3/7/18', '5', '', 'Ted', 'Area C', 'High', '', '', '102', 0),
(5453, 'A039', 'Rough Plumbing Area C', '', '3/9/2018', '3/9/18', '5', '', 'Tom', 'Area C', 'High', '', '', '102', 0),
(5454, 'A040', 'Site Layout', '', '2/12/2018', '2/12/18', '3', '', 'General', 'General', 'Medium', '', '', '102', 0),
(5455, 'M001', 'Notice to Proceed', '', '2/11/2018', '', '', '', 'General', 'General', '', '', '', '102', 0),
(5456, 'M002', 'Start Structural', '', '2/23/2018', '', '', '', 'General', 'General', '', '', '', '102', 0),
(5457, 'M003', 'Building Dried In', '', '', '3/9/2018', '', '', 'General', 'General', '', '', '', '102', 0),
(5458, 'M004', 'Fondations Complete', '', '', '2/24/2018', '', '', 'General', 'General', '', '', '', '102', 0),
(5467, 'A001', 'activity 001 002 003', '', '12/14/17', '', '', '', 'Todd', '', '', '', '', '101', 0),
(5468, 'A002', '', '', '', '12/15/17', '', '', 'Todd', '', '', '', '', '101', 0),
(5469, 'A003', '', '1', '12/17/17', '12/18/17', '', '', 'Todd', '', '', '', '', '101', 0),
(5470, '', '', '0', '', '12/15/17', '', '', 'Todd', '', '', '', '', '101', 0),
(5471, 'M001', 'Milestone 1', '0', '11/3/17', '', '', '', 'Todd', '', '', '', '', '101', 0),
(5472, 'M002', 'Milestone 2', '0', '11/2/17', '', '', '', 'Todd', '', '', '', '', '101', 0),
(5473, 'M003', 'Milestone 3', '0', '', '11/2/17', '', '', 'Todd', '', '', '', '', '101', 0),
(5474, 'M004', 'Milestone 4', '0', '', '11/7/17', '', '', 'Todd', '', '', '', '', '101', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_activity_constraint`
--

CREATE TABLE IF NOT EXISTS `tbl_activity_constraint` (
  `id` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `type` varchar(250) DEFAULT NULL,
  `actid` varchar(250) DEFAULT NULL,
  `desc` varchar(250) DEFAULT NULL,
  `start` varchar(250) DEFAULT NULL,
  `finish` varchar(250) DEFAULT NULL,
  `resp` varchar(250) DEFAULT NULL,
  `driving` varchar(250) DEFAULT NULL,
  `done` varchar(250) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=241 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_activity_constraint`
--

INSERT INTO `tbl_activity_constraint` (`id`, `pid`, `type`, `actid`, `desc`, `start`, `finish`, `resp`, `driving`, `done`) VALUES
(1, 61, 'Activity', 'a001', '', '10/9/17', '10/17/17', 'Todd', '', '0'),
(50, 88, 'Procurement', 'I005', 'Inspection Required', '10/2/17', '11/25/17', 'Todd', 'A003', '0'),
(51, 88, 'Procurement', 'P002', 'Second Procurement issue', '10/1/17', '10/16/17', 'Stan', 'A001', '0'),
(52, 88, 'Procurement', 'P003', 'Second Procurement issue', '10/1/17', '11/5/17', 'Todd', 'A002', '0'),
(49, 88, 'Action Item', 'AI001', 'Action Item Needed', '10/3/17', '10/4/17', 'Todd', 'A003', '0'),
(48, 88, 'Inspection', 'I005', 'Inspection Required', '10/2/17', '10/27/17', 'Steve', 'A003', '0'),
(47, 88, 'Procurement', 'P001', 'Procurement Issue', '', '10/7/17', 'Todd', 'A001', '0'),
(46, 88, 'Inspection', 'I2903', 'MEP Inspection Required', '', '10/25/17', 'Stan', 'A003', '0'),
(45, 88, 'Procurement', 'P0012', 'Buy more Cable', '', '10/14/17', 'Todd', 'A0002', '0'),
(53, 88, 'Procurement', 'A003', 'Activity 03', '11/2/17', '12/1/17', 'Todd', 'A001', '0'),
(54, 88, 'Procurement', 'a003', 'Activity 03', '11/2/17', '12/1/17', 'Todd', '', '0'),
(55, 88, 'Activity', 'a005', 'Activity 05', '10/14/17', '11/9/17', 'Stan', '', '0'),
(56, 88, 'Activity', 'A001', 'Activity 01', '10/11/17', '11/1/17', 'Todd', 'A002', '0'),
(57, 88, 'Activity', 'A003', 'Activity 03', '11/2/17', '12/1/17', 'Todd', '', '0'),
(240, 89, 'Design', 'D3334', 'D Const. D3334', '', '10/27/17', 'Steve', 'A003', '1'),
(239, 89, 'Design', 'D3333', 'Design Constraing 3333', '', '11/5/17', 'Stan', 'A003', '0'),
(238, 89, 'Procurement', 'P3535', 'Procurement Test', '', '11/27/17', 'Stan', 'A001', '0'),
(237, 89, 'Inspection', 'I2234', 'Inspection 2234', '', '11/5/17', 'Todd', 'A002', '0'),
(236, 89, 'Design', 'D001', 'D001 description', '11/11/17', '', 'Todd', 'A001', '0'),
(235, 89, 'Procurement', 'P2525', 'Test Procurement Activity', '', '11/2/17', 'Stan', 'A001', '0'),
(234, 89, 'Design', 'D020', 'Design Issue', '', '10/27/17', 'Stan', 'A002', '1'),
(233, 89, 'Procurement', 'P020', 'Random Procurement Issue', '10/7/17', '10/13/17', 'Todd', 'A001', '1'),
(232, 89, 'Action Item', 'AI0067', 'Action Item 67', '', '10/26/17', 'Todd', 'A002', '1'),
(231, 89, 'Inspection', 'I0067', 'Inspection Required', '', '10/29/17', 'Stan', 'A002', '1'),
(230, 89, 'Design', 'A007', 'Activity 07', '10/19/17', '10/31/17', 'Steve', 'A002', '1'),
(229, 89, 'Design', 'A007', 'Activity 07', '10/19/17', '10/31/17', 'Steve', 'A002', '1'),
(228, 89, 'Design', 'A009', 'Activity 09', '1/22/18', '1/29/18', 'Steve', 'A001', '0'),
(227, 89, 'Inspection', 'IN002', 'Another Inspection', '', '11/22/17', 'Todd', 'A007', '0'),
(226, 89, 'Design', 'D001', 'Design Required', '', '11/2/17', 'Steve', 'A012', '0'),
(225, 89, 'Inspection', 'IN001', 'Inspection Necessary', '', '10/19/17', 'Steve', 'A009', '1'),
(224, 89, 'Action Item', 'AI001', 'Action Needed', '', '11/27', 'Stan', 'A023', '0'),
(223, 89, 'Design', 'A003', 'Activity 03', '11/1/17', '11/30/17', 'Todd', 'A008', '0'),
(222, 89, 'Design', 'A002', 'Activity 02', '10/27/17', '11/8/17', 'Todd', 'A004', '0'),
(221, 89, 'Procurement', 'A001', 'Activity 01', '10/9/17', '10/30/17', 'Todd', 'A002', '1'),
(220, 89, 'Procurement', 'P001', 'Procure Items', '', '12/24/17', 'Todd', 'A001', '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_activity_snapshot_history`
--

CREATE TABLE IF NOT EXISTS `tbl_activity_snapshot_history` (
  `id` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `sid` varchar(250) DEFAULT NULL,
  `aid` varchar(250) DEFAULT NULL,
  `reason` varchar(250) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=840 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_activity_snapshot_history`
--

INSERT INTO `tbl_activity_snapshot_history` (`id`, `pid`, `sid`, `aid`, `reason`) VALUES
(422, 88, '12', 'A001', ''),
(424, 88, '10', 'A001', ''),
(421, 88, '13', 'A001', 'Weather'),
(423, 88, '11', 'A001', 'Workforce'),
(420, 88, '14', 'A001', ''),
(407, 88, '13', 'A002', ''),
(406, 88, '14', 'A002', ''),
(408, 88, '12', 'A002', ''),
(409, 88, '11', 'A002', ''),
(410, 88, '10', 'A002', ''),
(372, 88, '13', 'A003', ''),
(371, 88, '14', 'A003', ''),
(373, 88, '12', 'A003', ''),
(374, 88, '11', 'A003', ''),
(375, 88, '10', 'A003', ''),
(419, 88, '15', 'A001', ''),
(91, 88, '13', 'A004', ''),
(92, 88, '15', 'A004', ''),
(93, 88, '14', 'A004', ''),
(94, 88, '12', 'A004', ''),
(95, 88, '11', 'A004', ''),
(96, 88, '10', 'A004', ''),
(405, 88, '15', 'A002', ''),
(157, 88, '15', 'A006', ''),
(158, 88, '14', 'A006', ''),
(159, 88, '13', 'A006', ''),
(160, 88, '12', 'A006', ''),
(161, 88, '11', 'A006', ''),
(162, 88, '10', 'A006', ''),
(163, 88, '15', 'A005', ''),
(164, 88, '14', 'A005', ''),
(165, 88, '13', 'A005', ''),
(166, 88, '12', 'A005', ''),
(167, 88, '11', 'A005', ''),
(168, 88, '10', 'A005', ''),
(370, 88, '15', 'A003', ''),
(369, 88, '0', 'A003', ''),
(418, 88, '0', 'A001', ''),
(404, 88, '0', 'A002', ''),
(618, 89, '0', 'A001', ''),
(837, 89, '19', 'A001', ''),
(839, 89, '17', 'A001', ''),
(429, 89, '21', 'A001', ''),
(430, 89, '20', 'A001', ''),
(497, 89, '0', 'A003', ''),
(804, 89, '19', 'A003', ''),
(805, 89, '18', 'A003', ''),
(806, 89, '17', 'A003', ''),
(435, 89, '21', 'A003', ''),
(436, 89, '20', 'A003', ''),
(437, 89, '0', 'A005', ''),
(438, 89, '19', 'A005', ''),
(439, 89, '18', 'A005', ''),
(440, 89, '17', 'A005', ''),
(441, 89, '21', 'A005', ''),
(442, 89, '20', 'A005', ''),
(443, 89, '0', 'A004', ''),
(831, 89, '19', 'A004', ''),
(833, 89, '17', 'A004', ''),
(447, 89, '21', 'A004', ''),
(448, 89, '20', 'A004', ''),
(835, 89, '22', 'A001', ''),
(836, 89, '23', 'A001', ''),
(802, 89, '22', 'A003', ''),
(803, 89, '23', 'A003', ''),
(612, 89, '0', 'A002', ''),
(790, 89, '22', 'A002', ''),
(791, 89, '23', 'A002', ''),
(794, 89, '17', 'A002', ''),
(521, 92, '0', 'A001', ''),
(834, 89, '0', 'undefined', ''),
(838, 89, '18', 'A001', 'Design'),
(792, 89, '19', 'A002', 'Materials'),
(793, 89, '18', 'A002', 'Materials'),
(809, 92, '0', 'undefined', ''),
(764, 89, '22', 'A010', 'Manpower'),
(765, 89, '23', 'A010', ''),
(766, 89, '19', 'A010', ''),
(767, 89, '18', 'A010', ''),
(768, 89, '17', 'A010', ''),
(758, 89, '22', 'A011', ''),
(759, 89, '23', 'A011', ''),
(760, 89, '19', 'A011', ''),
(761, 89, '18', 'A011', ''),
(762, 89, '17', 'A011', ''),
(829, 89, '22', 'A004', ''),
(830, 89, '23', 'A004', ''),
(832, 89, '18', 'A004', 'Manpower');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_activity_tracking`
--

CREATE TABLE IF NOT EXISTS `tbl_activity_tracking` (
  `id` int(11) NOT NULL,
  `aid` varchar(200) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `resp` varchar(200) DEFAULT NULL,
  `start` varchar(200) DEFAULT NULL,
  `finish` varchar(200) DEFAULT NULL,
  `done` varchar(200) DEFAULT NULL,
  `pstart` varchar(200) DEFAULT NULL,
  `pfinish` varchar(200) DEFAULT NULL,
  `reason` varchar(200) DEFAULT NULL,
  `pid` varchar(200) DEFAULT NULL,
  `sid` varchar(200) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3154 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_activity_tracking`
--

INSERT INTO `tbl_activity_tracking` (`id`, `aid`, `desc`, `resp`, `start`, `finish`, `done`, `pstart`, `pfinish`, `reason`, `pid`, `sid`) VALUES
(1874, 'A013', 'Notes for Activity 13', 'Stan', '12/18/17', '1/12/18', '0', '12/17/17', '1/12/18', 'Weather', '88', '12'),
(1875, 'A014', 'Notes for Activity 14', 'Steve', '12/20/17', '1/23/18', '0', '12/21/17', '1/24/18', 'Weather', '88', '12'),
(1873, 'A012', 'Notes for Activity 12', 'Todd', '2/4/18', '2/8/18', '0', '2/10/18', '2/15/18', 'Weather', '88', '12'),
(1871, 'A010', 'Notes for Activity 10', 'Todd', '1/27/18', '2/22/18', '0', '1/23/18', '2/16/18', 'Too Much Planned', '88', '12'),
(1872, 'A011', 'Notes for Activity 11', 'Stan', '2/4/18', '2/22/18', '0', '2/14/18', '3/5/18', 'Weather', '88', '12'),
(1870, 'A009', 'Notes for Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '1/18/18', '1/25/18', 'Weather', '88', '12'),
(1868, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '10/19/17', '10/30/17', 'Weather', '88', '12'),
(742, 'A014', 'Notes for Activity 14', 'Steve', '12/21/17', '1/24/18', '0', '12/20/17', '1/23/18', 'Weather', '88', '11'),
(741, 'A013', 'Notes for Activity 13', 'Stan', '12/17/17', '1/12/18', '0', '12/20/17', '1/16/18', 'Weather', '88', '11'),
(740, 'A012', 'Notes for Activity 12', 'Todd', '2/10/18', '2/15/18', '0', '2/1/18', '2/6/18', 'Weather', '88', '11'),
(739, 'A011', 'Notes for Activity 11', 'Stan', '2/14/18', '3/5/18', '0', '2/4/18', '2/22/18', 'Weather', '88', '11'),
(736, 'A008', 'Notes for Activity 08', 'Steve', '12/3/17', '1/2/18', '0', '12/2/17', '1/2/18', 'Weather', '88', '11'),
(737, 'A009', 'Notes for Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '1/19/18', '1/26/18', 'Weather', '88', '11'),
(738, 'A010', 'Notes for Activity 10', 'Todd', '1/23/18', '2/16/18', '0', '1/23/18', '2/16/18', 'Weather', '88', '11'),
(731, 'A003', 'Notes for Activity 03', 'Todd', '11/4/17', '12/5/17', '0', '11/4/17', '12/5/17', 'Weather', '88', '11'),
(732, 'A004', 'Notes for Activity 04', 'Stan', '10/12/17', '11/15/17', '0', '10/12/17', '11/15/17', 'Weather', '88', '11'),
(735, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '10/19/17', '10/30/17', 'Weather', '88', '11'),
(769, 'A013', 'Notes for Activity 13', 'Stan', '12/18/17', '1/12/18', '0', '12/18/17', '1/12/18', 'Weather', '88', '13'),
(768, 'A012', 'Notes for Activity 12', 'Todd', '2/1/18', '2/6/18', '0', '2/4/18', '2/8/18', 'Weather', '88', '13'),
(767, 'A011', 'Notes for Activity 11', 'Stan', '2/4/18', '2/22/18', '0', '2/4/18', '2/22/18', 'Weather', '88', '13'),
(766, 'A010', 'Notes for Activity 10', 'Todd', '2/23/18', '3/21/18', '0', '1/27/18', '2/22/18', 'Design', '88', '13'),
(765, 'A009', 'Notes for Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '1/18/18', '1/25/18', 'Weather', '88', '13'),
(764, 'A008', 'Notes for Activity 08', 'Steve', '12/6/17', '1/4/18', '0', '12/4/17', '12/18/17', 'Materials', '88', '13'),
(763, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '10/19/17', '10/30/17', 'Weather', '88', '13'),
(762, 'A006', 'Notes for Activity 06', 'Stan', '12/17/17', '12/27/17', '0', '11/21/17', '12/4/17', 'Workforce', '88', '13'),
(760, 'A004', 'Notes for Activity 04', 'Stan', '11/13/17', '12/15/17', '0', '10/12/17', '11/15/17', 'Workforce', '88', '13'),
(733, 'A005', 'Notes for Activity 05', 'Stan', '10/16/17', '11/9/17', '0', '10/14/17', '11/9/17', 'Weather', '88', '11'),
(734, 'A006', 'Notes for Activity 06', 'Stan', '11/17/17', '11/28/17', '0', '11/19/17', '11/29/17', 'Weather', '88', '11'),
(727, 'A013', 'Notes for Activity 13', 'Stan', '12/20/17', '1/16/18', '0', '', '', 'Weather', '88', '10'),
(728, 'A014', 'Notes for Activity 14', 'Steve', '12/20/17', '1/23/18', '0', '', '', 'Weather', '88', '10'),
(725, 'A011', 'Notes for Activity 11', 'Stan', '2/4/18', '2/22/18', '0', '', '', 'Weather', '88', '10'),
(726, 'A012', 'Notes for Activity 12', 'Todd', '2/1/18', '2/6/18', '0', '', '', 'Weather', '88', '10'),
(722, 'A008', 'Notes for Activity 08', 'Steve', '12/2/17', '1/2/18', '0', '', '', 'Weather', '88', '10'),
(723, 'A009', 'Notes for Activity 09', 'Steve', '1/19/18', '1/26/18', '0', '', '', 'Weather', '88', '10'),
(724, 'A010', 'Notes for Activity 10', 'Todd', '1/23/18', '2/16/18', '0', '', '', 'Weather', '88', '10'),
(720, 'A006', 'Notes for Activity 06', 'Stan', '11/19/17', '11/29/17', '0', '', '', 'Weather', '88', '10'),
(721, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '', '', 'Weather', '88', '10'),
(1869, 'A008', 'Notes for Activity 08', 'Steve', '12/4/17', '12/18/17', '0', '12/3/17', '1/2/18', 'Weather', '88', '12'),
(761, 'A005', 'Notes for Activity 05', 'Stan', '10/14/17', '11/9/17', '0', '10/16/17', '11/9/17', 'Weather', '88', '13'),
(759, 'A003', 'Notes for Activity 03', 'Todd', '12/3/17', '1/2/18', '0', '11/2/17', '12/1/17', 'Materials', '88', '13'),
(758, 'A002', 'Notes for Activity 02', 'Todd', '10/28/17', '11/7/17', '0', '10/27/17', '11/6/17', 'Too Much Planned', '88', '13'),
(1861, 'A014', 'Notes for Activity 14', 'Steve', '12/20/17', '1/23/18', '0', '12/20/17', '1/23/18', '', '88', '14'),
(1860, 'A013', 'Notes for Activity 13', 'Stan', '12/18/17', '1/12/18', '0', '12/18/17', '1/12/18', '', '88', '14'),
(1859, 'A012', 'Notes for Activity 12', 'Todd', '2/1/18', '2/6/18', '0', '2/1/18', '2/6/18', '', '88', '14'),
(1858, 'A011', 'Notes for Activity 11', 'Stan', '2/4/18', '2/22/18', '0', '2/4/18', '2/22/18', '', '88', '14'),
(1857, 'A010', 'Notes for Activity 10', 'Todd', '1/23/18', '2/16/18', '0', '2/23/18', '3/21/18', '', '88', '14'),
(1856, 'A009', 'Notes for Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '1/18/18', '1/25/18', '', '88', '14'),
(1855, 'A008', 'Notes for Activity 08', 'Steve', '12/2/17', '1/2/18', '0', '12/6/17', '1/4/18', '', '88', '14'),
(1854, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '10/19/17', '10/30/17', '', '88', '14'),
(1853, 'A006', 'Notes for Activity 06', 'Stan', '11/21/17', '11/30/17', '0', '12/17/17', '12/27/17', '', '88', '14'),
(1852, 'A005', 'Notes for Activity 05', 'Stan', '10/14/17', '11/9/17', '0', '10/14/17', '11/9/17', '', '88', '14'),
(1851, 'A004', 'Notes for Activity 04', 'Stan', '10/12/17', '11/15/17', '0', '11/13/17', '12/15/17', '', '88', '14'),
(1850, 'A003', 'Notes for Activity 03', 'Todd', '11/6/17', '12/5/17', '0', '12/3/17', '1/2/18', '', '88', '14'),
(730, 'A002', 'Notes for Activity 02', 'Todd', '10/27/17', '11/6/17', '0', '10/27/17', '11/6/17', 'Weather', '88', '11'),
(729, 'A001', 'Notes for Activity 01', 'Todd', '10/10/17', '10/31/17', '0', '10/11/17', '11/1/17', 'Weather', '88', '11'),
(717, 'A003', 'Notes for Activity 03', 'Todd', '11/4/17', '12/5/17', '0', '', '', 'Weather', '88', '10'),
(718, 'A004', 'Notes for Activity 04', 'Stan', '10/12/17', '11/15/17', '0', '', '', 'Weather', '88', '10'),
(1849, 'A002', 'Notes for Activity 02', 'Todd', '10/27/17', '11/6/17', '0', '10/28/17', '11/7/17', '', '88', '14'),
(1848, 'A001', 'Notes for Activity 01', 'Todd', '10/12/17', '11/2/17', '0', '10/11/17', '11/1/17', '', '88', '14'),
(1817, 'A012', 'Notes for Activity 12', 'Todd', '2/1/18', '2/6/18', '0', '2/1/18', '2/6/18', '', '88', '15'),
(1816, 'A011', 'Notes for Activity 11', 'Stan', '2/4/18', '2/22/18', '0', '2/4/18', '2/22/18', '', '88', '15'),
(1815, 'A010', 'Notes for Activity 10', 'Todd', '1/23/18', '2/16/18', '0', '1/23/18', '2/16/18', '', '88', '15'),
(1814, 'A009', 'Notes for Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '1/18/18', '1/25/18', '', '88', '15'),
(1813, 'A008', 'Notes for Activity 08', 'Steve', '12/2/17', '1/2/18', '0', '12/2/17', '1/2/18', '', '88', '15'),
(1812, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '10/19/17', '10/30/17', '', '88', '15'),
(1811, 'A006', 'Notes for Activity 06', 'Stan', '11/17/17', '11/28/17', '0', '11/21/17', '11/30/17', '', '88', '15'),
(1810, 'A005', 'Notes for Activity 05', 'Stan', '10/14/17', '11/9/17', '0', '10/14/17', '11/9/17', '', '88', '15'),
(1809, 'A004', 'Notes for Activity 04', 'Stan', '10/12/17', '11/15/17', '0', '10/12/17', '11/15/17', '', '88', '15'),
(1867, 'A006', 'Notes for Activity 06', 'Stan', '11/21/17', '12/4/17', '0', '11/17/17', '11/28/17', 'Design', '88', '12'),
(1808, 'A003', 'Notes for Activity 03', 'Todd', '11/2/17', '12/1/17', '0', '11/6/17', '12/5/17', '', '88', '15'),
(1807, 'A002', 'Notes for Activity 02', 'Todd', '11/5/17', '11/14/17', '0', '10/27/17', '11/6/17', 'Too Much Planned', '88', '15'),
(1864, 'A003', 'Notes for Activity 03', 'Todd', '11/2/17', '12/1/17', '0', '11/4/17', '12/5/17', 'Weather', '88', '12'),
(719, 'A005', 'Notes for Activity 05', 'Stan', '10/14/17', '11/9/17', '0', '', '', 'Weather', '88', '10'),
(716, 'A002', 'Notes for Activity 02', 'Todd', '10/27/17', '11/6/17', '0', '', '', 'Weather', '88', '10'),
(715, 'A001', 'Notes for Activity 01', 'Todd', '10/11/17', '11/1/17', '0', '', '', 'Weather', '88', '10'),
(770, 'A014', 'Notes for Activity 14', 'Steve', '12/20/17', '1/23/18', '0', '12/20/17', '1/23/18', 'Weather', '88', '13'),
(757, 'A001', 'Notes for Activity 01', 'Todd', '10/11/17', '11/1/17', '0', '10/8/17', '11/1/17', 'Weather', '88', '13'),
(1806, 'A001', 'Notes for Activity 01', 'Todd', '11/2/17', '11/23/17', '0', '10/12/17', '11/2/17', 'Workforce', '88', '15'),
(1866, 'A005', 'Notes for Activity 05', 'Stan', '10/16/17', '11/9/17', '0', '10/16/17', '11/9/17', 'Weather', '88', '12'),
(3149, 'A032', 'Activity 32', 'Stan', '2/1/18', '2/22/18', '0', '2/1/18', '2/22/18', '', '89', '22'),
(3036, 'A024', 'Activity 24', 'Todd', '1/21/18', '1/29/18', '0', '1/19/18', '1/25/18', '', '89', '19'),
(3035, 'A023', 'Activity 23', 'Steve', '1/5/18', '1/15/18', '0', '1/7/18', '1/16/18', '', '89', '19'),
(3034, 'A022', 'Activity 22', 'Steve', '12/16/17', '12/22/17', '0', '12/18/17', '12/22/17', '', '89', '19'),
(3033, 'A021', 'Activity 21', 'Steve', '12/4/17', '12/13/17', '0', '12/3/17', '12/13/17', '', '89', '19'),
(3032, 'A020', 'Activity 20', 'Stan', '12/22/17', '1/19/18', '0', '12/24/17', '1/22/18', '', '89', '19'),
(3031, 'A019', 'Activity 19', 'Stan', '11/27/17', '12/12/17', '0', '11/27/17', '12/14/17', '', '89', '19'),
(3030, 'A018', 'Activity 18', 'Stan', '11/18/17', '12/18/17', '0', '11/18/17', '12/15/17', 'Design', '89', '19'),
(3029, 'A017', 'Activity 17', 'Todd', '11/14/17', '11/29/17', '0', '11/12/17', '11/28/17', 'Manpower', '89', '19'),
(3028, 'A016', 'Activity 16', 'Todd', '11/3/17', '11/16/17', '0', '11/3/17', '11/16/17', '', '89', '19'),
(3027, 'A015', 'Activity 15', 'Todd', '11/19/17', '11/29/17', '0', '11/17/17', '11/28/17', 'Manpower', '89', '19'),
(3026, 'A014', 'Activity 14', 'Steve', '12/22/17', '1/25/18', '0', '12/20/17', '1/23/18', '', '89', '19'),
(3025, 'A013', 'Activity 13', 'Stan', '12/17/17', '1/12/18', '0', '12/18/17', '1/12/18', '', '89', '19'),
(3024, 'A012', 'Activity 12', 'Todd', '1/23/18', '1/26/18', '0', '2/1/18', '2/6/18', '', '89', '19'),
(3023, 'A011', 'Activity 11', 'Stan', '2/7/18', '2/26/18', '0', '2/4/18', '2/22/18', '', '89', '19'),
(3022, 'A010', 'Activity 10', 'Todd', '1/24/18', '2/19/18', '0', '1/23/18', '2/16/18', '', '89', '19'),
(3021, 'A009', 'Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '1/18/18', '1/25/18', '', '89', '19'),
(3020, 'A008', 'Activity 08', 'Steve', '12/3/17', '1/1/18', '0', '12/2/17', '1/2/18', '', '89', '19'),
(3019, 'A007', 'Activity 07', 'Steve', '10/19/17', '10/31/17', '0', '10/19/17', '10/30/17', '', '89', '19'),
(2274, 'A030', 'Notes for Activity 30', 'Todd', '2/17/18', '3/12/18', '0', '2/17/18', '3/12/18', '', '89', '18'),
(2273, 'A029', 'Notes for Activity 29', 'Steve', '2/23/18', '3/21/18', '0', '2/23/18', '3/21/18', '', '89', '18'),
(2272, 'A028', 'Notes for Activity 28', 'Steve', '2/19/18', '2/20/18', '0', '2/19/18', '2/20/18', '', '89', '18'),
(2271, 'A027', 'Notes for Activity 27', 'Stan', '2/5/18', '3/9/18', '0', '2/5/18', '3/9/18', '', '89', '18'),
(2270, 'A026', 'Notes for Activity 26', 'Todd', '1/2/18', '1/3/18', '0', '1/2/18', '1/3/18', '', '89', '18'),
(2267, 'A023', 'Notes for Activity 23', 'Steve', '1/7/18', '1/16/18', '0', '1/7/18', '1/16/18', '', '89', '18'),
(2268, 'A024', 'Notes for Activity 24', 'Todd', '1/19/18', '1/25/18', '0', '1/19/18', '1/25/18', '', '89', '18'),
(2269, 'A025', 'Notes for Activity 25', 'Stan', '1/23/18', '2/19/18', '0', '1/23/18', '2/19/18', '', '89', '18'),
(2266, 'A022', 'Notes for Activity 22', 'Steve', '12/18/17', '12/22/17', '0', '12/18/17', '12/22/17', '', '89', '18'),
(2265, 'A021', 'Notes for Activity 21', 'Steve', '12/3/17', '12/13/17', '0', '12/3/17', '12/13/17', '', '89', '18'),
(2264, 'A020', 'Notes for Activity 20', 'Stan', '12/24/17', '1/22/18', '0', '12/24/17', '1/22/18', '', '89', '18'),
(2263, 'A019', 'Notes for Activity 19', 'Stan', '11/27/17', '12/14/17', '0', '11/27/17', '12/14/17', '', '89', '18'),
(2262, 'A018', 'Notes for Activity 18', 'Stan', '11/18/17', '12/15/17', '0', '11/18/17', '12/15/17', '', '89', '18'),
(2261, 'A017', 'Notes for Activity 17', 'Todd', '11/12/17', '11/28/17', '0', '11/12/17', '11/28/17', '', '89', '18'),
(2260, 'A016', 'Notes for Activity 16', 'Todd', '11/3/17', '11/16/17', '0', '11/3/17', '11/16/17', '', '89', '18'),
(2258, 'A014', 'Notes for Activity 14', 'Steve', '12/20/17', '1/23/18', '0', '12/20/17', '1/23/18', '', '89', '18'),
(2259, 'A015', 'Notes for Activity 15', 'Todd', '11/17/17', '11/28/17', '0', '11/17/17', '11/28/17', '', '89', '18'),
(2257, 'A013', 'Notes for Activity 13', 'Stan', '12/18/17', '1/12/18', '0', '12/18/17', '1/12/18', '', '89', '18'),
(2256, 'A012', 'Notes for Activity 12', 'Todd', '2/1/18', '2/6/18', '0', '2/1/18', '2/6/18', '', '89', '18'),
(2255, 'A011', 'Notes for Activity 11', 'Stan', '2/4/18', '2/22/18', '0', '2/4/18', '2/22/18', '', '89', '18'),
(2253, 'A009', 'Notes for Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '1/18/18', '1/25/18', '', '89', '18'),
(2254, 'A010', 'Notes for Activity 10', 'Todd', '1/23/18', '2/16/18', '0', '1/23/18', '2/16/18', '', '89', '18'),
(2252, 'A008', 'Notes for Activity 08', 'Steve', '12/2/17', '1/2/18', '0', '12/2/17', '1/2/18', '', '89', '18'),
(2304, 'A030', 'Notes for Activity 30', 'Todd', '2/17/18', '3/12/18', '0', '', '', '', '89', '17'),
(2303, 'A029', 'Notes for Activity 29', 'Steve', '2/23/18', '3/21/18', '0', '', '', '', '89', '17'),
(2302, 'A028', 'Notes for Activity 28', 'Steve', '2/19/18', '2/20/18', '0', '', '', '', '89', '17'),
(2301, 'A027', 'Notes for Activity 27', 'Stan', '2/5/18', '3/9/18', '0', '', '', '', '89', '17'),
(2300, 'A026', 'Notes for Activity 26', 'Todd', '1/2/18', '1/3/18', '0', '', '', '', '89', '17'),
(2299, 'A025', 'Notes for Activity 25', 'Stan', '1/23/18', '2/19/18', '0', '', '', '', '89', '17'),
(2298, 'A024', 'Notes for Activity 24', 'Todd', '1/19/18', '1/25/18', '0', '', '', '', '89', '17'),
(2297, 'A023', 'Notes for Activity 23', 'Steve', '1/7/18', '1/16/18', '0', '', '', '', '89', '17'),
(2296, 'A022', 'Notes for Activity 22', 'Steve', '12/18/17', '12/22/17', '0', '', '', '', '89', '17'),
(2295, 'A021', 'Notes for Activity 21', 'Steve', '12/3/17', '12/13/17', '0', '', '', '', '89', '17'),
(2294, 'A020', 'Notes for Activity 20', 'Stan', '12/24/17', '1/22/18', '0', '', '', '', '89', '17'),
(2293, 'A019', 'Notes for Activity 19', 'Stan', '11/27/17', '12/14/17', '0', '', '', '', '89', '17'),
(2292, 'A018', 'Notes for Activity 18', 'Stan', '11/18/17', '12/15/17', '0', '', '', '', '89', '17'),
(2291, 'A017', 'Notes for Activity 17', 'Todd', '11/12/17', '11/28/17', '0', '', '', '', '89', '17'),
(2290, 'A016', 'Notes for Activity 16', 'Todd', '11/3/17', '11/16/17', '0', '', '', '', '89', '17'),
(2289, 'A015', 'Notes for Activity 15', 'Todd', '11/17/17', '11/28/17', '0', '', '', '', '89', '17'),
(2288, 'A014', 'Notes for Activity 14', 'Steve', '12/20/17', '1/23/18', '0', '', '', '', '89', '17'),
(2287, 'A013', 'Notes for Activity 13', 'Stan', '12/18/17', '1/12/18', '0', '', '', '', '89', '17'),
(2286, 'A012', 'Notes for Activity 12', 'Todd', '2/1/18', '2/6/18', '0', '', '', '', '89', '17'),
(2285, 'A011', 'Notes for Activity 11', 'Stan', '2/4/18', '2/22/18', '0', '', '', '', '89', '17'),
(2284, 'A010', 'Notes for Activity 10', 'Todd', '1/23/18', '2/16/18', '0', '', '', '', '89', '17'),
(2283, 'A009', 'Notes for Activity 09', 'Steve', '1/18/18', '1/25/18', '0', '', '', '', '89', '17'),
(2282, 'A008', 'Notes for Activity 08', 'Steve', '12/2/17', '1/2/18', '0', '', '', '', '89', '17'),
(2281, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '', '', '', '89', '17'),
(2280, 'A006', 'Notes for Activity 06', 'Stan', '11/17/17', '11/28/17', '0', '', '', '', '89', '17'),
(2279, 'A005', 'Notes for Activity 05', 'Stan', '10/14/17', '11/9/17', '0', '', '', '', '89', '17'),
(2278, 'A004', 'Notes for Activity 04', 'Stan', '10/12/17', '11/15/17', '0', '', '', '', '89', '17'),
(2277, 'A003', 'Notes for Activity 03', 'Todd', '11/2/17', '12/1/17', '0', '', '', '', '89', '17'),
(2276, 'A002', 'Notes for Activity 02', 'Todd', '10/27/17', '11/6/17', '0', '', '', '', '89', '17'),
(2275, 'A001', 'Notes for Activity 01', 'Todd', '10/9/17', '10/30/17', '0', '', '', '', '89', '17'),
(925, 'A001', 'Notes for Activity 01', 'Todd', '10/9/17', '10/30/17', '0', '10/9/17', '10/30/17', '', '89', '21'),
(926, 'A002', 'Notes for Activity 02', 'Todd', '10/27/17', '11/8/17', '0', '10/27/17', '11/8/17', '', '89', '21'),
(927, 'A003', 'Notes for Activity 03', 'Todd', '11/1/17', '11/30/17', '0', '11/1/17', '11/30/17', '', '89', '21'),
(928, 'A004', 'Notes for Activity 04', 'Stan', '10/12/17', '11/8/17', '0', '10/12/17', '11/8/17', '', '89', '21'),
(929, 'A005', 'Notes for Activity 05', 'Stan', '10/14/17', '11/13/17', '0', '10/14/17', '11/13/17', '', '89', '21'),
(930, 'A006', 'Notes for Activity 06', 'Stan', '11/17/17', '11/30/17', '0', '11/17/17', '11/30/17', '', '89', '21'),
(931, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/31/17', '0', '10/19/17', '10/31/17', '', '89', '21'),
(932, 'A008', 'Notes for Activity 08', 'Steve', '12/4/17', '1/2/18', '0', '12/4/17', '1/1/18', '', '89', '21'),
(933, 'A009', 'Notes for Activity 09', 'Steve', '1/22/18', '1/29/18', '0', '1/20/18', '1/29/18', '', '89', '21'),
(934, 'A010', 'Notes for Activity 10', 'Todd', '1/22/18', '2/15/18', '0', '1/22/18', '2/15/18', '', '89', '21'),
(935, 'A011', 'Notes for Activity 11', 'Stan', '2/3/18', '2/22/18', '0', '2/1/18', '2/20/18', '', '89', '21'),
(936, 'A012', 'Notes for Activity 12', 'Todd', '1/23/18', '2/1/18', '0', '1/23/18', '1/26/18', '', '89', '21'),
(937, 'A013', 'Notes for Activity 13', 'Stan', '12/17/17', '10/16/18', '0', '12/17/17', '1/12/18', '', '89', '21'),
(938, 'A014', 'Notes for Activity 14', 'Steve', '12/24/17', '1/30/18', '0', '12/24/17', '1/26/18', '', '89', '21'),
(939, 'A015', 'Notes for Activity 15', 'Todd', '11/19/17', '11/29/17', '0', '11/19/17', '11/29/17', '', '89', '21'),
(940, 'A016', 'Notes for Activity 16', 'Todd', '11/3/17', '11/16/17', '0', '11/3/17', '11/16/17', '', '89', '21'),
(941, 'A017', 'Notes for Activity 17', 'Todd', '11/14/17', '11/29/17', '0', '11/14/17', '11/29/17', '', '89', '21'),
(942, 'A018', 'Notes for Activity 18', 'Stan', '11/18/17', '12/14/17', '0', '11/18/17', '12/14/17', '', '89', '21'),
(943, 'A019', 'Notes for Activity 19', 'Stan', '11/27/17', '12/11/17', '0', '11/27/17', '12/11/17', '', '89', '21'),
(944, 'A020', 'Notes for Activity 20', 'Stan', '12/22/17', '1/19/18', '0', '12/22/17', '1/19/18', '', '89', '21'),
(945, 'A021', 'Notes for Activity 21', 'Steve', '12/6/17', '12/15/17', '0', '12/6/17', '12/15/17', '', '89', '21'),
(946, 'A022', 'Notes for Activity 22', 'Steve', '12/16/17', '12/22/17', '0', '12/16/17', '12/22/17', '', '89', '21'),
(947, 'A023', 'Notes for Activity 23', 'Steve', '1/1/17', '1/12/17', '0', '1/1/17', '1/10/17', '', '89', '21'),
(948, 'A024', 'Notes for Activity 24', 'Todd', '1/23/17', '1/30/17', '0', '1/23/17', '1/30/17', '', '89', '21'),
(949, 'A025', 'Notes for Activity 25', 'Stan', '1/23/17', '2/17/17', '0', '1/21/17', '2/17/17', '', '89', '21'),
(950, 'A026', 'Notes for Activity 26', 'Todd', '1/3/17', '1/4/17', '0', '1/3/17', '1/4/17', '', '89', '21'),
(951, 'A027', 'Notes for Activity 27', 'Stan', '2/5/17', '3/10/17', '0', '2/5/17', '3/10/17', '', '89', '21'),
(952, 'A028', 'Notes for Activity 28', 'Steve', '2/24/17', '2/27/17', '0', '2/21/17', '2/22/17', '', '89', '21'),
(953, 'A029', 'Notes for Activity 29', 'Steve', '2/22/17', '3/20/17', '0', '2/22/17', '3/20/17', '', '89', '21'),
(954, 'A030', 'Notes for Activity 30', 'Todd', '2/21/17', '3/14/17', '0', '2/18/17', '3/13/17', '', '89', '21'),
(955, 'A031', '', 'Todd', '2/16/17', '3/7/17', '0', '2/16/17', '3/3/17', '', '89', '21'),
(956, 'A032', '', 'Stan', '2/1/17', '2/22/17', '0', '1/31/17', '2/21/17', '', '89', '21'),
(957, 'A033', '', 'Steve', '2/7/17', '2/20/17', '0', '2/1/17', '2/14/17', '', '89', '21'),
(958, 'A034', '', 'Steve', '1/29/17', '2/14/17', '0', '1/29', '2/13/01', '', '89', '21'),
(959, 'A036', '', 'Todd', '1/21/17', '2/9/17', '0', '', '', '', '89', '21'),
(960, 'A037', '', 'Stan', '2/14', '2/27/01', '0', '', '', '', '89', '21'),
(3150, 'A033', 'Activity 33', 'Steve', '2/7/18', '2/20/18', '0', '2/7/18', '2/20/18', '', '89', '22'),
(3147, 'A030', 'Activity 30', 'Todd', '2/21/18', '3/14/18', '0', '2/21/18', '3/14/18', '', '89', '22'),
(3148, 'A031', 'Activity 31', 'Todd', '2/16/18', '3/7/18', '0', '2/16/18', '3/7/18', '', '89', '22'),
(3146, 'A029', 'Activity 29', 'Steve', '2/22/18', '3/20/18', '0', '2/22/18', '3/20/18', '', '89', '22'),
(3145, 'A028', 'Activity 28', 'Steve', '2/24/18', '2/27/18', '0', '2/24/18', '2/27/18', '', '89', '22'),
(3144, 'A027', 'Activity 27', 'Stan', '2/5/18', '3/9/18', '0', '2/5/18', '3/9/18', '', '89', '22'),
(3143, 'A026', 'Activity 26', 'Todd', '1/4/18', '1/5/18', '0', '1/3/18', '1/4/18', 'Weather', '89', '22'),
(3142, 'A025', 'Activity 25', 'Stan', '1/24/18', '2/20/18', '0', '1/23/18', '2/19/18', 'Too Much Planned', '89', '22'),
(3141, 'A024', 'Activity 24', 'Todd', '1/24/18', '1/31/18', '0', '1/23/18', '1/30/18', 'Materials', '89', '22'),
(3140, 'A023', 'Activity 23', 'Steve', '1/2/18', '1/12/18', '0', '1/1/18', '1/11/18', 'Design', '89', '22'),
(3139, 'A022', 'Activity 22', 'Steve', '12/16/17', '12/22/17', '0', '12/16/17', '12/22/17', '', '89', '22'),
(3137, 'A020', 'Activity 20', 'Stan', '12/22/17', '1/19/18', '0', '12/22/17', '1/19/18', '', '89', '22'),
(3138, 'A021', 'Activity 21', 'Steve', '12/6/17', '12/15/17', '0', '12/6/17', '12/15/17', '', '89', '22'),
(3136, 'A019', 'Activity 19', 'Stan', '11/27/17', '12/11/17', '0', '11/27/17', '12/11/17', '', '89', '22'),
(3135, 'A018', 'Activity 18', 'Stan', '11/18/17', '12/14/17', '0', '11/18/17', '12/14/17', '', '89', '22'),
(3134, 'A017', 'Activity 17', 'Todd', '11/14/17', '11/29/17', '0', '11/14/17', '11/29/17', '', '89', '22'),
(3133, 'A016', 'Activity 16', 'Todd', '11/3/17', '11/16/17', '0', '11/3/17', '11/16/17', '', '89', '22'),
(2973, 'A033', 'Activity 33', 'Steve', '2/7/18', '2/20/18', '0', '', '', '', '89', '23'),
(2972, 'A032', 'Activity 32', 'Stan', '2/1/18', '2/22/18', '0', '1/31/18', '2/21/18', '', '89', '23'),
(2971, 'A031', 'Activity 31', 'Todd', '2/16/18', '3/7/18', '0', '2/12/18', '2/27/18', '', '89', '23'),
(2970, 'A030', 'Activity 30', 'Todd', '2/21/18', '3/14/18', '0', '2/18/18', '3/12/18', '', '89', '23'),
(2969, 'A029', 'Activity 29', 'Steve', '2/22/18', '3/20/18', '0', '2/22/18', '3/20/18', '', '89', '23'),
(2968, 'A028', 'Activity 28', 'Steve', '2/24/18', '2/27/18', '0', '2/21/18', '2/22/18', '', '89', '23'),
(2967, 'A027', 'Activity 27', 'Stan', '2/5/18', '3/9/18', '0', '2/4/18', '3/9/18', '', '89', '23'),
(2966, 'A026', 'Activity 26', 'Todd', '1/3/18', '1/4/18', '0', '1/3/18', '1/4/18', '', '89', '23'),
(2965, 'A025', 'Activity 25', 'Stan', '1/23/18', '2/19/18', '0', '1/21/18', '2/16/18', '', '89', '23'),
(2964, 'A024', 'Activity 24', 'Todd', '1/23/18', '1/30/18', '0', '1/21/18', '1/29/18', '', '89', '23'),
(2963, 'A023', 'Activity 23', 'Steve', '1/1/18', '1/11/18', '0', '1/5/18', '1/15/18', '', '89', '23'),
(2962, 'A022', 'Activity 22', 'Steve', '12/16/17', '12/22/17', '0', '12/16/17', '12/22/17', '', '89', '23'),
(2961, 'A021', 'Activity 21', 'Steve', '12/6/17', '12/15/17', '0', '12/4/17', '12/13/17', 'Manpower', '89', '23'),
(2960, 'A020', 'Activity 20', 'Stan', '12/22/17', '1/19/18', '0', '12/22/17', '1/19/18', '', '89', '23'),
(2959, 'A019', 'Activity 19', 'Stan', '11/27/17', '12/11/17', '0', '11/27/17', '12/12/17', '', '89', '23'),
(2958, 'A018', 'Activity 18', 'Stan', '11/18/17', '12/14/17', '0', '11/18/17', '12/18/17', '', '89', '23'),
(2957, 'A017', 'Activity 17', 'Todd', '11/14/17', '11/29/17', '0', '11/14/17', '11/29/17', '', '89', '23'),
(2956, 'A016', 'Activity 16', 'Todd', '11/3/17', '11/16/17', '0', '11/3/17', '11/16/17', '', '89', '23'),
(2955, 'A015', 'Activity 15', 'Todd', '11/19/17', '11/29/17', '0', '11/19/17', '11/29/17', '', '89', '23'),
(2954, 'A014', 'Activity 14', 'Steve', '12/24/17', '1/30/18', '0', '12/22/17', '1/25/18', 'Too Much Planned', '89', '23'),
(2953, 'A013', 'Activity 13', 'Stan', '12/17/17', '1/9/18', '0', '12/17/17', '1/12/18', 'Manpower', '89', '23'),
(2952, 'A012', 'Activity 12', 'Todd', '1/23/18', '2/1/18', '0', '1/23/18', '1/26/18', '', '89', '23'),
(2251, 'A007', 'Notes for Activity 07', 'Steve', '10/19/17', '10/30/17', '0', '10/19/17', '10/30/17', '', '89', '18'),
(2248, 'A004', 'Notes for Activity 04', 'Stan', '10/13/17', '11/16/17', '0', '10/12/17', '11/15/17', 'Manpower', '89', '18'),
(3132, 'A015', 'Activity 15', 'Todd', '11/19/17', '11/29/17', '0', '11/19/17', '11/29/17', '', '89', '22'),
(2951, 'A011', 'Activity 11', 'Stan', '2/3/18', '2/22/18', '0', '2/7/18', '2/26/18', '', '89', '23'),
(2950, 'A010', 'Activity 10', 'Todd', '1/22/18', '2/15/18', '0', '1/24/18', '2/19/18', '', '89', '23'),
(2949, 'A009', 'Activity 09', 'Steve', '1/22/18', '1/29/18', '0', '1/18/18', '1/25/18', '', '89', '23'),
(2948, 'A008', 'Activity 08', 'Steve', '12/4/17', '1/2/18', '0', '12/3/17', '1/1/18', 'Design', '89', '23'),
(2947, 'A007', 'Activity 07', 'Steve', '10/19/17', '10/31/17', '0', '10/19/17', '10/31/17', '', '89', '23'),
(3018, 'A006', 'Activity 06', 'Stan', '11/17/17', '11/29/17', '0', '11/17/17', '11/28/17', 'Weather', '89', '19'),
(2946, 'A006', 'Activity 06', 'Stan', '11/17/17', '11/30/17', '0', '11/17/17', '11/29/17', '', '89', '23'),
(1865, 'A004', 'Notes for Activity 04', 'Stan', '10/12/17', '11/15/17', '0', '10/12/17', '11/15/17', 'Weather', '88', '12'),
(1863, 'A002', 'Notes for Activity 02', 'Todd', '10/27/17', '11/6/17', '0', '10/27/17', '11/6/17', 'Weather', '88', '12'),
(1862, 'A001', 'Notes for Activity 01', 'Todd', '10/8/17', '11/1/17', '0', '10/10/17', '10/31/17', 'Materials', '88', '12'),
(1818, 'A013', 'Notes for Activity 13', 'Stan', '12/18/17', '1/12/18', '0', '12/18/17', '1/12/18', '', '88', '15'),
(1819, 'A014', 'Notes for Activity 14', 'Steve', '12/20/17', '1/23/18', '0', '12/20/17', '1/23/18', '', '88', '15'),
(3017, 'A005', 'Activity 05', 'Stan', '10/14/17', '11/13/17', '0', '10/15/17', '11/9/17', 'Too Much Planned', '89', '19'),
(3016, 'A004', 'Activity 04', 'Stan', '10/12/17', '11/8/17', '0', '10/13/17', '11/16/17', '', '89', '19'),
(3015, 'A003', 'Activity 03', 'Todd', '11/1/17', '11/30/17', '0', '11/2/17', '12/1/17', '', '89', '19'),
(3014, 'A002', 'Activity 02', 'Todd', '10/27/17', '11/8/17', '0', '10/28/17', '11/7/17', 'Materials', '89', '19'),
(3013, 'A001', 'Activity 01', 'Todd', '10/9/17', '10/30/17', '0', '10/10/17', '10/31/17', '', '89', '19'),
(2250, 'A006', 'Notes for Activity 06', 'Stan', '11/17/17', '11/28/17', '0', '11/17/17', '11/28/17', '', '89', '18'),
(2249, 'A005', 'Notes for Activity 05', 'Stan', '10/15/17', '11/9/17', '0', '10/14/17', '11/9/17', 'Materials', '89', '18'),
(2247, 'A003', 'Notes for Activity 03', 'Todd', '11/2/17', '12/1/17', '0', '11/2/17', '12/1/17', '', '89', '18'),
(2245, 'A001', 'Notes for Activity 01', 'Todd', '10/10/17', '10/31/17', '0', '10/9/17', '10/30/17', 'Design', '89', '18'),
(2246, 'A002', 'Notes for Activity 02', 'Todd', '10/28/17', '11/7/17', '0', '10/27/17', '11/6/17', 'Materials', '89', '18'),
(2945, 'A005', 'Activity 05', 'Stan', '10/14/17', '11/13/17', '0', '10/14/17', '11/13/17', '', '89', '23'),
(2944, 'A004', 'Activity 04', 'Stan', '10/12/17', '11/8/17', '0', '10/12/17', '11/8/17', '', '89', '23'),
(2943, 'A003', 'Activity 03', 'Todd', '11/1/17', '11/30/17', '0', '11/1/17', '11/30/17', '', '89', '23'),
(3131, 'A014', 'Activity 14', 'Steve', '12/24/17', '1/30/18', '0', '12/24/17', '1/30/18', '', '89', '22'),
(3130, 'A013', 'Activity 13', 'Stan', '12/17/17', '1/9/18', '0', '12/17/17', '1/9/18', 'Materials', '89', '22'),
(3129, 'A012', 'Activity 12', 'Todd', '1/23/18', '2/2/18', '0', '1/23/18', '2/1/18', 'Materials', '89', '22'),
(3128, 'A011', 'Activity 11', 'Stan', '2/3/18', '2/22/18', '0', '2/3/18', '2/22/18', '', '89', '22'),
(2942, 'A002', 'Activity 02', 'Todd', '10/27/17', '11/8/17', '0', '10/27/17', '11/8/17', '', '89', '23'),
(2941, 'A001', 'Activity 01', 'Todd', '10/9/17', '10/30/17', '0', '10/9/17', '10/30/17', '', '89', '23'),
(3127, 'A010', 'Activity 10', 'Todd', '1/23/18', '2/16/18', '0', '1/22/18', '2/15/18', 'Manpower', '89', '22'),
(3126, 'A009', 'Activity 09', 'Steve', '1/24/18', '1/31/18', '0', '1/22/18', '1/29/18', 'Design', '89', '22'),
(3125, 'A008', 'Activity 08', 'Steve', '12/4/17', '1/3/18', '0', '12/4/17', '1/2/18', 'Materials', '89', '22'),
(3124, 'A007', 'Activity 07', 'Steve', '10/19/17', '10/31/17', '0', '10/19/17', '10/31/17', '', '89', '22'),
(3123, 'A006', 'Activity 06', 'Stan', '11/17/17', '11/30/17', '0', '11/17/17', '11/30/17', '', '89', '22'),
(2974, 'A034', 'Activity 34', 'Steve', '1/29/18', '2/13/18', '0', '', '', '', '89', '23'),
(2975, 'A036', 'Activity 36', 'Todd', '1/21/18', '2/8/18', '0', '', '', '', '89', '23'),
(2976, 'A037', 'Activity 37', 'Stan', '2/14/18', '2/27/18', '0', '', '', '', '89', '23'),
(3122, 'A005', 'Activity 05', 'Stan', '10/14/17', '11/13/17', '0', '10/14/17', '11/13/17', '', '89', '22'),
(3037, 'A025', 'Activity 25', 'Stan', '1/21/18', '2/16/18', '0', '1/23/18', '2/19/18', '', '89', '19'),
(3038, 'A026', 'Activity 26', 'Todd', '1/3/18', '1/4/18', '0', '1/2/18', '1/3/18', '', '89', '19'),
(3039, 'A027', 'Activity 27', 'Stan', '2/4/18', '3/9/18', '0', '2/5/18', '3/9/18', '', '89', '19'),
(3040, 'A028', 'Activity 28', 'Steve', '2/21/18', '2/22/18', '0', '2/19/18', '2/20/18', '', '89', '19'),
(3041, 'A029', 'Activity 29', 'Steve', '2/22/18', '3/20/18', '0', '2/23/18', '3/21/18', '', '89', '19'),
(3042, 'A030', 'Activity 30', 'Todd', '2/18/18', '3/12/18', '0', '2/17/18', '3/12/18', '', '89', '19'),
(3043, 'A031', 'Activity 31', 'Todd', '2/12/18', '2/27/18', '0', '', '', '', '89', '19'),
(3044, 'A032', 'Activity 32', 'Stan', '1/31/18', '2/21/18', '0', '', '', '', '89', '19'),
(3045, '', '', '', '', '', '0', '', '', '', '89', '19'),
(3151, 'A034', 'Activity 34', 'Steve', '1/29/18', '2/13/18', '0', '1/29/18', '2/13/18', '', '89', '22'),
(3121, 'A004', 'Activity 04', 'Stan', '10/12/17', '11/8/17', '0', '10/12/17', '11/8/17', '', '89', '22'),
(3120, 'A003', 'Activity 03', 'Todd', '11/1/17', '11/30/17', '0', '11/1/17', '11/30/17', '', '89', '22'),
(3119, 'A002', 'Activity 02', 'Todd', '10/27/17', '11/8/17', '0', '10/27/17', '11/8/17', '', '89', '22'),
(3118, 'A001', 'Activity 01', 'Todd', '10/9/17', '10/30/17', '0', '10/9/17', '10/30/17', '', '89', '22'),
(3152, 'A036', 'Activity 36', 'Todd', '1/21/18', '2/8/18', '0', '1/21/18', '2/8/18', '', '89', '22'),
(3153, 'A037', 'Activity 37', 'Stan', '2/14/18', '2/27/18', '0', '2/14/18', '2/27/18', '', '89', '22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_constraint`
--

CREATE TABLE IF NOT EXISTS `tbl_constraint` (
  `project_id` int(11) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_constraint`
--

INSERT INTO `tbl_constraint` (`project_id`, `value`, `color`, `id`) VALUES
(75, 'Action Item', '#176516', 1),
(75, 'Materials', '#1a94a8', 2),
(75, 'Inspection', '#9abb5d', 3),
(61, 'Activity', '', 4),
(61, 'Activity Item', '', 5),
(88, 'Procurement', '#71b458', 6),
(88, 'Inspection', '#927a7a', 7),
(88, 'Action Item', '#d01313', 8),
(89, 'Action Item', '#4e9b19', 22),
(89, 'Procurement', '#c82454', 21),
(89, 'Design', '#9d2525', 20),
(90, 'Action Item', '#df1f1f', 13),
(90, 'Inspection', '#eadd35', 14),
(90, 'Procurement', '#2ac73d', 15),
(89, 'Inspection', '#db2525', 23),
(89, 'Constraint', '#b28484', 24),
(94, 'Procurement', '#19a725', 37),
(94, 'Inspection', '#93aa31', 36),
(94, 'Constraint', '#c52c2c', 35),
(94, 'Design', '#4e43d2', 38),
(102, 'Inpection', '#ae1818', 44),
(102, 'Procurement', '#74b039', 45),
(102, 'Design', '#213fbb', 46),
(102, 'Constraint', '#c0db23', 47);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_delay`
--

CREATE TABLE IF NOT EXISTS `tbl_delay` (
  `project_id` int(11) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_delay`
--

INSERT INTO `tbl_delay` (`project_id`, `value`, `color`, `id`) VALUES
(75, 'Design', '#e57a7a', 1),
(75, 'Weather', '#7d5d5d', 2),
(75, 'Procurement', '#2bc113', 3),
(75, 'Manpower', '#121872', 4),
(75, 'Too Much Work', '#3daa1c', 5),
(88, 'Weather', '#b60808', 6),
(88, 'Workforce', '#aa5d5d', 7),
(88, 'Materials', '#4cb446', 8),
(88, 'Too Much Planned', '#cc2ba1', 9),
(88, 'Design', '#1adbdd', 10),
(89, 'Design', '#c12d2d', 11),
(89, 'Materials', '#1738bd', 12),
(89, 'Manpower', '#2cbd31', 13),
(89, 'Too Much Planned', '#785555', 14),
(89, 'Weather', '#2fa8d6', 15),
(90, 'Weather', '#d61a1a', 16),
(90, 'Manpower', '#54d038', 17),
(90, 'Design', '#1d1aa1', 18),
(90, 'Materials', '#d63ac8', 19),
(90, 'Workspace', '#d06a26', 20),
(94, 'Weather', '#4a6721', 26),
(94, 'Manpower', '#b44b4b', 27),
(94, 'Too Much Planned', '#e32626', 28),
(94, 'Design', '#5058ce', 29),
(94, 'Materials', '#7050a5', 30),
(102, 'Other', '#8e8282', 48),
(102, 'Workspace', '#ac49c1', 47),
(102, 'Manpower', '#d0994e', 46),
(102, 'Materials', '#46c3ca', 45),
(102, 'Design', '#2bb25f', 44),
(102, 'Weather', '#175aa8', 43);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_holiday`
--

CREATE TABLE IF NOT EXISTS `tbl_holiday` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `holiday` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_holiday`
--

INSERT INTO `tbl_holiday` (`id`, `project_id`, `holiday`) VALUES
(1, 8, '1/10/2017'),
(2, 8, '1/10/2015'),
(3, 8, '1/20/2016'),
(4, 8, '1/1/2015'),
(5, 8, '1/2/2014'),
(6, 8, '2/6/2015'),
(7, 8, '3/5/2017'),
(8, 8, '2/6/2017'),
(9, 8, '2/5/2017'),
(10, 8, '2/6/2017'),
(11, 8, '2/9/2017'),
(12, 8, '3/5/2017'),
(14, 8, '3/9/2017'),
(15, 8, '1/11'),
(16, 8, '5/8/2017'),
(17, 8, '6/8/2017'),
(19, 8, '3/4/2017'),
(20, 8, '6/9/2017'),
(21, 8, '2/9/2017'),
(22, 8, '5/8/2017'),
(23, 4, '1/6/2016'),
(24, 4, '2/5/2017'),
(25, 19, '1/5/2016'),
(26, 19, '1/8/2015'),
(27, 19, '2/7/2017'),
(59, 92, 'current');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_location`
--

CREATE TABLE IF NOT EXISTS `tbl_location` (
  `project_id` int(11) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_location`
--

INSERT INTO `tbl_location` (`project_id`, `value`, `color`, `id`) VALUES
(75, 'Floor 1', '#d45151', 1),
(75, 'Floor 2', '#68aa6b', 2),
(79, 'Floor 1', '#ae2525', 3),
(79, 'Floor 2', '#221654', 4),
(61, 'Floor 1', '#b62121', 5),
(61, 'Floor 2', '#488c9b', 6),
(84, 'Floor 1', '#ce4141', 7),
(84, 'Floor 2', '#493030', 8),
(83, 'Floor 1', '#f47f10', 9),
(87, 'Floor 1', '#9b9595', 10),
(87, 'Floor 2', '#141212', 11),
(88, 'Floor 1', '#d61f1f', 12),
(88, 'Floor 2', '#2da0a7', 13),
(89, 'Floor 2', '#7cb989', 27),
(89, 'Floor 1', '#ac5b5b', 26),
(90, 'Area A', '#90d966', 16),
(90, 'Area B', '#3f7fa3', 17),
(90, 'Area C', '#9826ca', 18),
(92, 'Floor 2', '#2f991e', 23),
(92, 'Floor 1', '#ce5e5e', 22),
(94, 'Area C', '#31397d', 37),
(94, 'Area B', '#74c762', 36),
(94, 'Area A', '#d04f4f', 35),
(94, 'General', '#c34ab3', 38),
(102, 'Area A', '#db2121', 43),
(102, 'Area B', '#3eac37', 44),
(102, 'Area C', '#3156b2', 45),
(102, 'General', '#9f9696', 46);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_permission`
--

CREATE TABLE IF NOT EXISTS `tbl_permission` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `permission` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_permission`
--

INSERT INTO `tbl_permission` (`id`, `email`, `permission`, `pid`) VALUES
(38, 'test2@mail.com', 'Edit Responsible Tasks', 92),
(39, 'test3@mail.com', 'Read-Only', 92),
(40, 'test2@mail.com', 'Administrator', 99),
(41, 'test3@mail.com', 'Administrator', 69),
(10, 'test2@mail.com', 'Edit Responsible Tasks', 89),
(43, 'test3@mail.com', 'Administrator', 71),
(42, 'test3@mail.com', 'Administrator', 70),
(37, 'test1@mail.com', 'Edit All Tasks', 92),
(36, 'test@mail.com', 'Administrator', 98),
(35, 'test@mail.com', 'Administrator', 97),
(34, 'test@mail.com', 'Administrator', 96),
(33, 'test@mail.com', 'Administrator', 95),
(32, 'test@mail.com', 'Administrator', 94),
(31, 'test@mail.com', 'Administrator', 92),
(30, 'test@mail.com', 'Administrator', 90),
(29, 'test@mail.com', 'Administrator', 89),
(28, 'test@mail.com', 'Administrator', 88),
(44, 'test1@mail.com', 'Edit Responsible Tasks', 94),
(45, 'test2@mail.com', 'Edit Responsible Tasks', 94),
(46, 'test3@mail.com', 'Edit Responsible Tasks', 94),
(47, 'smoore.us@gmail.com', 'Read-Only', 94),
(48, 'test1@mail.com', 'Administrator', 65),
(49, 'test1@mail.com', 'Administrator', 66),
(50, 'test1@mail.com', 'Administrator', 67),
(51, 'test1@mail.com', 'Administrator', 68),
(52, 'test1@mail.com', 'Administrator', 93),
(53, 'test@mail.com', 'Administrator', 100),
(54, 'test@mail.com', 'Administrator', 101),
(55, 'smoore.us@gmail.com', 'Administrator', 79),
(56, 'smoore.us@gmail.com', 'Administrator', 87),
(57, 'smoore.us@gmail.com', 'Administrator', 102);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_priority`
--

CREATE TABLE IF NOT EXISTS `tbl_priority` (
  `project_id` int(11) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_priority`
--

INSERT INTO `tbl_priority` (`project_id`, `value`, `color`, `id`) VALUES
(75, 'High', '#f60d0d', 1),
(75, 'Medium', '#f0eb2b', 2),
(75, 'Low', '#309d34', 3),
(79, 'High', '#df0808', 4),
(79, 'Medium', '#abbf3b', 5),
(79, 'Low', '#3cbd15', 6),
(61, 'High', '#e50f0f', 7),
(61, 'Medium', '#babd25', 8),
(61, 'Low', '#123d0d', 9),
(84, 'High', '#d80e0e', 10),
(84, 'Medium', '#d9c73b', 11),
(84, 'Low', '#358716', 12),
(83, 'High', '#2055c1', 13),
(87, 'High', '#dd1515', 14),
(87, 'Medium', '#d7ea38', 15),
(87, 'Low', '#2bce2a', 16),
(88, 'High', '#df2020', 17),
(88, 'Medium', '#c1d617', 18),
(88, 'Low', '#336512', 19),
(89, 'High', '#db0b0b', 20),
(89, 'Medium', '#e4f273', 21),
(89, 'Low', '#20d226', 22),
(90, 'High', '#dd1a1a', 23),
(90, 'Medium', '#eae522', 24),
(90, 'Low', '#24df22', 25),
(92, 'Low', '#54a82d', 34),
(92, 'Medium', '#b5ce26', 33),
(92, 'High', '#d23030', 32),
(94, 'High', '#e31212', 38),
(94, 'Medium', '#ece614', 39),
(94, 'Low', '#167810', 40),
(102, 'Low', '#36bf35', 49),
(102, 'Medium', '#d3df1b', 48),
(102, 'High', '#ea1414', 47);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project`
--

CREATE TABLE IF NOT EXISTS `tbl_project` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `platform` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_project`
--

INSERT INTO `tbl_project` (`id`, `name`, `date`, `platform`, `user`, `user_id`) VALUES
(65, 'test1-project', 'days', '', '', 2),
(66, 'pp-test1', 'days', '0,2,', '', 2),
(67, 'pp-test1-1', 'days', '0,', '', 2),
(68, 'pp2-test1', 'days', '', '', 2),
(76, 'CMRI', 'days', '2,', '', 14),
(77, 'CMRI', 'days', '2,', '', 14),
(78, 'CMRI', 'days', '2,1,', '', 14),
(79, 'Phase 5 Testing', 'days', '', '', 5),
(87, 'Phone App Testing', 'days', '', '', 5),
(88, 'Phase 5 Testing', 'days', '', '', 1),
(89, 'Phase 5a Testing', 'days', '', '', 1),
(90, 'UC Health Example', 'days', '', '', 1),
(92, 'Phase 7 Testing', 'days', '', '', 1),
(99, 'Test User 2 Admin', 'days', '', '', 3),
(100, 'Phase 8 Testing', 'days', '', '', 1),
(101, 'Phase 8-1 Testing', 'days', '', '', 1),
(102, 'Building Project', 'days', '', '', 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_responsible`
--

CREATE TABLE IF NOT EXISTS `tbl_responsible` (
  `project_id` int(11) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_responsible`
--

INSERT INTO `tbl_responsible` (`project_id`, `value`, `color`, `id`, `user`) VALUES
(61, 'Todd', '#f45d0a', 1, ''),
(61, 'Steve', '#10ea8c', 2, ''),
(75, 'Steve', '#893232', 3, ''),
(75, 'Todd', '#1b2170', 4, ''),
(75, 'George', '#3bb3b9', 5, ''),
(75, 'Ted', '#8a8a8a', 6, ''),
(75, 'Paul', '#dba54e', 7, ''),
(75, 'Sue', '#c32668', 8, ''),
(79, 'Todd', '#b04646', 9, ''),
(79, 'Stan', '#449847', 10, ''),
(79, 'Steve', '#3d2081', 11, ''),
(61, 'Stan', '#902d2d', 12, ''),
(61, 'Fred', '#515289', 13, ''),
(83, 'Todd', '#5df00a', 14, ''),
(84, 'Todd', '#c51b1b', 15, ''),
(84, 'Stan', '#649d53', 16, ''),
(84, 'Steve', '#29186c', 17, ''),
(87, 'Todd', '#b82727', 18, ''),
(87, 'Stan', '#238e11', 19, ''),
(87, 'Steve', '#2628a7', 20, ''),
(88, 'Todd', '#cc3333', 21, ''),
(88, 'Stan', '#3c8a57', 22, ''),
(88, 'Steve', '#0b14a5', 23, ''),
(89, 'Steve', '#3328c3', 125, ''),
(89, 'Stan', '#40b624', 124, 'test2@mail.com'),
(89, 'Todd', '#dd2525', 123, ''),
(90, 'Concrete', '#a7a5a5', 27, ''),
(90, 'Electrical', '#46a52a', 28, ''),
(90, 'Framing', '#a5744d', 29, ''),
(90, 'HVAC', '#c321c3', 30, ''),
(90, 'Insulation', '#ccdf29', 31, ''),
(90, 'Masonry', '#db9f3d', 32, ''),
(90, 'MEP', '#e55252', 33, ''),
(90, 'Plumbing', '#2a4bd6', 34, ''),
(90, 'Roofing', '#706a6a', 35, ''),
(90, 'Scaffolding', '#e4f20c', 36, ''),
(90, 'Steel', '#587bac', 37, ''),
(92, 'Steve', '#000', 61, 'smoore.us@gmail.com'),
(92, 'Stan', '#45d644', 60, 'test2@mail.com'),
(92, 'Todd', '#e72222', 59, 'test1@mail.com'),
(99, '', '', 62, ''),
(94, 'Sue', '#a023c3', 85, 'test3@mail.com'),
(94, 'Jim', '#eca039', 84, 'test2@mail.com'),
(94, 'Fred', '#ca2323', 82, 'test@mail.com'),
(94, 'George', '#2aa333', 83, 'test1@mail.com'),
(94, 'General', '#908484', 86, ''),
(102, 'Tom', '#bebe24', 121, ''),
(102, 'Ted', '#32d89e', 120, ''),
(102, 'John', '#2f9298', 119, ''),
(102, 'Paul', '#5cb42a', 117, ''),
(102, 'Sue', '#b655c5', 118, ''),
(102, 'Stan', '#c12929', 116, ''),
(102, 'General', '#938787', 122, ''),
(101, 'Todd', '#2fecee', 127, '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_snapshot`
--

CREATE TABLE IF NOT EXISTS `tbl_snapshot` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `date` varchar(200) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_snapshot`
--

INSERT INTO `tbl_snapshot` (`id`, `project_id`, `value`, `color`, `desc`, `date`) VALUES
(1, 61, '10/28/17', '', 'description for snapshot test', '11/15/2017'),
(2, 61, '10/29/17', '', 'snapshot test', '11/15/2017'),
(3, 61, '11/1/17', '', '11/1 Snapshot', '11/14/2017'),
(4, 84, '11/14/17', '', 'Initial Snapshot', '11/14/2017'),
(11, 88, '11/1/17', '', 'First Update', '11/23/2017'),
(13, 88, '12/3/17', '', 'First Update', '11/24/2017'),
(10, 88, '10/1/17', '', 'Initial Baseline Schedule', '11/23/2017'),
(12, 88, '12/1/17', '', 'Second Update', '11/23/2017'),
(14, 88, '12/15/17', '', 'Mid-December Update', '11/27/2017'),
(15, 88, '12/16/17', '', 'Mid-December Test', '11/27/2017'),
(17, 89, '10/1/17', '', 'Initial Baseline', '11/30/2017'),
(18, 89, '11/1/17', '', 'First Update', '11/30/2017'),
(19, 89, '12/1/17', '', 'Second Update', '11/30/2017'),
(22, 89, '2/1/18', '', 'Fourth Update', '11/30/2017'),
(23, 89, '1/1/18', '', 'Third Update', '11/30/2017');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS `tbl_user` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `company` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `permission` varchar(250) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `name`, `company`, `email`, `password`, `permission`) VALUES
(1, 'test user', 'test company', 'test@mail.com', 'test', 'Edit All Tasks'),
(2, 'test1 user', 'test1 company', 'test1@mail.com', 'test1', ''),
(3, 'test2', 'test2', 'test2@mail.com', 'test2', 'Edit Responsible Tasks'),
(4, 'test3', 'test3', 'test3@mail.com', 'test3', 'Read-Only'),
(5, 'Steve Moore', 'SlatPlanner', 'smoore.us@gmail.com', 'rstlne', ''),
(6, 'Susan', 'ABC', 'susan@gmail.com', '1234', ''),
(8, 'Ringo', 'Boris', 'ringothedude@hotmail.com', 'ringo2017', ''),
(9, 'demo', 'harmis Tehnology', 'nehal@harmistechnology.com', 'harmis123', ''),
(10, 'Anish', 'na', 'walk2anish@gmail.com', 'anish78', ''),
(11, 'Nikita', 'sdlc', 'ndnikki18@gmail.com', 'nikki', ''),
(12, 'Nikita', 'sdlc', 'ndnikki18', 'nikki', ''),
(13, '245676788', 'sdlc', '4365767', 'nikki', ''),
(14, 'Adam Gurley', 'Robins & Morton', 'agurley@robinsmorton.com', '9484MccJ', ''),
(15, 'Ken Jones', 'LiteRailSys', 'LiteRailSys@att.net', 'sGIDNEYHUMEs_1456', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_userlist`
--

CREATE TABLE IF NOT EXISTS `tbl_userlist` (
  `project_id` int(11) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_userlist`
--

INSERT INTO `tbl_userlist` (`project_id`, `value`, `color`, `id`) VALUES
(61, 'test@mail.com', '', 1),
(75, 'smoore.us@gmail.com', '', 2),
(75, 'pedro@mail.com', '', 3),
(88, 'smoore.us@gmail.com', '', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_activity`
--
ALTER TABLE `tbl_activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_activity_constraint`
--
ALTER TABLE `tbl_activity_constraint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_activity_snapshot_history`
--
ALTER TABLE `tbl_activity_snapshot_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_activity_tracking`
--
ALTER TABLE `tbl_activity_tracking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_constraint`
--
ALTER TABLE `tbl_constraint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_delay`
--
ALTER TABLE `tbl_delay`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_holiday`
--
ALTER TABLE `tbl_holiday`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_location`
--
ALTER TABLE `tbl_location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_permission`
--
ALTER TABLE `tbl_permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_priority`
--
ALTER TABLE `tbl_priority`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_project`
--
ALTER TABLE `tbl_project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_responsible`
--
ALTER TABLE `tbl_responsible`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_snapshot`
--
ALTER TABLE `tbl_snapshot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_userlist`
--
ALTER TABLE `tbl_userlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_activity`
--
ALTER TABLE `tbl_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5475;
--
-- AUTO_INCREMENT for table `tbl_activity_constraint`
--
ALTER TABLE `tbl_activity_constraint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=241;
--
-- AUTO_INCREMENT for table `tbl_activity_snapshot_history`
--
ALTER TABLE `tbl_activity_snapshot_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=840;
--
-- AUTO_INCREMENT for table `tbl_activity_tracking`
--
ALTER TABLE `tbl_activity_tracking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3154;
--
-- AUTO_INCREMENT for table `tbl_constraint`
--
ALTER TABLE `tbl_constraint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `tbl_delay`
--
ALTER TABLE `tbl_delay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `tbl_holiday`
--
ALTER TABLE `tbl_holiday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=60;
--
-- AUTO_INCREMENT for table `tbl_location`
--
ALTER TABLE `tbl_location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `tbl_permission`
--
ALTER TABLE `tbl_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT for table `tbl_priority`
--
ALTER TABLE `tbl_priority`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT for table `tbl_project`
--
ALTER TABLE `tbl_project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=103;
--
-- AUTO_INCREMENT for table `tbl_responsible`
--
ALTER TABLE `tbl_responsible`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=128;
--
-- AUTO_INCREMENT for table `tbl_snapshot`
--
ALTER TABLE `tbl_snapshot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `tbl_userlist`
--
ALTER TABLE `tbl_userlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
