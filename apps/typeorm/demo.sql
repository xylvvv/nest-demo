/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 09/10/2020 19:12:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of category
-- ----------------------------
BEGIN;
INSERT INTO `category` VALUES (1, 'category1');
INSERT INTO `category` VALUES (2, 'category2');
COMMIT;

-- ----------------------------
-- Table structure for order_form
-- ----------------------------
DROP TABLE IF EXISTS `order_form`;
CREATE TABLE `order_form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of order_form
-- ----------------------------
BEGIN;
INSERT INTO `order_form` VALUES (1, 'code00A');
INSERT INTO `order_form` VALUES (2, 'code00B');
COMMIT;

-- ----------------------------
-- Table structure for order_item
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `number` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_form` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of order_item
-- ----------------------------
BEGIN;
INSERT INTO `order_item` VALUES (1, 1, 1, 100);
INSERT INTO `order_item` VALUES (2, 1, 2, 100);
INSERT INTO `order_item` VALUES (3, 1, 3, 100);
INSERT INTO `order_item` VALUES (4, 2, 2, 100);
INSERT INTO `order_item` VALUES (5, 2, 3, 100);
INSERT INTO `order_item` VALUES (6, 2, 4, 100);
COMMIT;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL DEFAULT '',
  `price` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_ff0c0301a95e517153df97f6812` (`categoryId`),
  CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of product
-- ----------------------------
BEGIN;
INSERT INTO `product` VALUES (1, 1, 'product1', 88.8);
INSERT INTO `product` VALUES (2, 1, 'product2', 88.8);
INSERT INTO `product` VALUES (3, 1, 'product3', 88.8);
INSERT INTO `product` VALUES (4, 2, 'product4', 88.8);
INSERT INTO `product` VALUES (5, 2, 'product5', 88.8);
INSERT INTO `product` VALUES (6, 2, 'product6', 88.8);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
