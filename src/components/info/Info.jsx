import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RogerWaters from './RogerWaters';
import Mason from './Mason';
import Gilmour from './Gilmour';
import Wright from './Wright';
import './Info.css';

const Info = () => {
  const [currentRoute, setCurrentRoute] = useState(null);

  const handleImageClick = (offsetX, offsetY) => {
    if (
      offsetY >= 110 &&
      offsetY <= 400 &&
      offsetX >= 22 &&
      offsetX <= 180
    ) {
      setCurrentRoute('/info/waters');
    } else if (
      offsetY >= 110 &&
      offsetY <= 400 &&
      offsetX >= 200 &&
      offsetX <= 350
    ) {
      setCurrentRoute('/info/mason');
    } else if (
      offsetY >= 110 &&
      offsetY <= 400 &&
      offsetX >= 370 &&
      offsetX <= 530
    ) {
      setCurrentRoute('/info/gilmour');
    } else if (
      offsetY >= 110 &&
      offsetY <= 400 &&
      offsetX >= 550 &&
      offsetX <= 720
    ) {
      setCurrentRoute('/info/wright');
    }
  };

  const renderComponent = () => {
    switch (currentRoute) {
      case '/info/waters':
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <RogerWaters />
          </motion.div>
        );
      case '/info/mason':
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Mason />
          </motion.div>
        );
      case '/info/gilmour':
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Gilmour />
          </motion.div>
        );
      case '/info/wright':
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Wright />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="background">
        <motion.div
          className="line"
          style={{ background: '#D96ED4' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="line"
          style={{ background: 'yellow' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="line"
          style={{ background: 'blue' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.div
          className="line"
          style={{ background: 'green' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.div
          className="line"
          style={{ background: 'orange' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        />
        <motion.div
          className="line"
          style={{ background: 'red' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>
      <div className="image-container">
        <motion.img
          src="Pink-Floyd-PNG-Free-Download.png"
          alt="Pink Floyd"
          className="image"
          style={{
            width: '100%',
            padding: '10px',
            objectFit: 'none',
            objectPosition: 'center bottom',
            height: '50vh',
          }}
          onClick={(event) => {
            const image = event.target;
            const rect = image.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
            handleImageClick(offsetX, offsetY);
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-container"
      >
        {renderComponent()}
      </motion.div>

      <motion.h2
        style={{ color: 'pink' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="click-text"
      >
        Click your Floyd
      </motion.h2>
    </>
  );
};

export default Info;
