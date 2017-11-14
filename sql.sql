-- phpMyAdmin SQL Dump
-- version 2.11.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 09, 2017 at 04:46 AM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `db_slat`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_activity`
--

CREATE TABLE `tbl_activity` (
  `id` int(11) NOT NULL auto_increment,
  `activity_id` varchar(255) NOT NULL,
  `activity_name` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `start` varchar(255) NOT NULL,
  `finish` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `pid` varchar(255) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `tbl_activity`
--

INSERT INTO `tbl_activity` (`id`, `activity_id`, `activity_name`, `duration`, `start`, `finish`, `code`, `color`, `size`, `url`, `note`, `pid`) VALUES
(40, 'A0001', 'Activity 01', '14', '10/08/2017', '', 'Concrete', '#33256a', '', '', '', '8'),
(41, 'A0002', 'Activity 02', '10', '10/6/2017', '', 'Concrete', '#33256a', '', '', '', '8'),
(42, 'A0003', 'Activity 03', '9', '10/9/2017', '', 'Structiral', '#ff05ea', '', '', '', '8'),
(43, 'A0004', 'Activity 04', '3', '10/2/2017', '', 'Mechanical', '#55568b', '', '', '', '8'),
(44, 'A0005', 'Activity 05', '10', '10/6/2017', '', 'Mechanical', '#55568b', '', '', '', '8');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project`
--

CREATE TABLE `tbl_project` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `platform` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tbl_project`
--

INSERT INTO `tbl_project` (`id`, `name`, `date`, `platform`, `user`) VALUES
(4, 'Project3', 'days', '0,', ''),
(8, 'Project4', 'days', '0,1,', '');
