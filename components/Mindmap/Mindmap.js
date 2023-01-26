import React, { useEffect, useRef, useState } from 'react'
import mindmap from '../../public/mindmap.png'
import mappa from '../../public/mappa-mentale.png'
import logo from '../../public/logo.png'
import Image from 'next/image'
import styles from './mindmap.module.css'
import {motion} from 'framer-motion'

import {AiFillPlusCircle} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import {BsPlus} from 'react-icons/bs';

function Mindmap() {

  // const [inputValue, setInputValue] = useState('');
  // const [nodes, setNodes] = useState([
  //   { id: 1, category:"opposite", text: "Opposites", position: { x: 0, y: 0 }, input: "Opposites" },
  //   { id: 2, category:"opposite", text: "Opposites", position: { x: 0, y: 0 }, input: "Opposites" },
  //   { id: 3, category:"opposite", text: "Opposites", position: { x: 0, y: 0 }, input: "Opposites" },
  //   { id: 4, category:"sequence", text: "Sequences", position: { x: 0, y: 0 }, input: "Sequences" },
  //   { id: 5, category:"sequence", text: "Sequences", position: { x: 0, y: 0 }, input: "Sequences" },
  //   { id: 6, category:"sequence", text: "Sequences", position: { x: 0, y: 0 }, input: "Sequences" },
  //   { id: 7, category:"equivalent", text: "Equivalents", position: { x: 0, y: 0 }, input: "Equivalents" },
  //   { id: 8, category:"equivalent", text: "Equivalents", position: { x: 0, y: 0 }, input: "Equivalents" },
  //   { id: 9, category:"equivalent", text: "Equivalents", position: { x: 0, y: 0 }, input: "Equivalents" },
  // ]);


  // const [nodes, setNodes] = useState([
  //   { id: 1, category:"opposite", text: "Opposites", position: { x: 0, y: 0 }, input: "Opposites" },
  //   { id: 2, category:"sequence", text: "sequences", position: { x: 0, y: 0 }, input: "sequences" },
  //   { id: 3, category:"equivalent", text: "equivalents", position: { x: 0, y: 0 }, input: "equivalents" },
  // ]);
  const [nodes, setNodes] = useState([
    { id: 1, category:"opposto", text: "Opposites", position: { x: 0, y: 0 }, input: "OPPOSTO"},
    { id: 2, category:"conseguenza", text: "sequences", position: { x: 0, y: 0 }, input: "CONSEGUENZA"},
    { id: 3, category:"equivalenza", text: "equivalents", position: { x: 0, y: 0 }, input: "EQUIVALENZA"},
  ]);

  // const handleAddNode = (parentId) => {
  //   const newId = nodes.length + 1;
  //   const newNode = { id: newId, category:"", text: "New Value", position: { x: 0, y: 0 }, input: "New Value" };
  //   setNodes([...nodes, newNode]);
  //   console.log(nodes);
  // };
  const addNode = (value) => {
    const newId = nodes.length + 1;
    const newNode = { id: newId, category:value, text: "New Value", position: { x: 0, y: 0 }, input: value };
    setNodes([...nodes, newNode]);
  };

  const handleDeleteNode = (nodeId) => {
    setNodes(nodes.filter((node) => node.id !== nodeId));
  };

  const handleInputChange = (e, nodeId) => {
    const newNodes = nodes.map((node) => {
      if (node.id === nodeId) {
        return { ...node, input: e.target.value };
      }
      return node;
    });
    setNodes(newNodes);
  };


  // function handleInputChange(e) {
  //   setInputValue(e.target.value);
  // }

  return (
      <motion.div className={styles.container} transition={{ duration: 1 }} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
        <p className={styles.curvyTextHeadline}>
          MAPPA MENTALE
        </p>
        <p className={styles.curvyText}>
          SA MENTE CHE RIESCE AD ALLAGARSI NON ORNA MAIN ALLA DIMENSIONE PRECEDENTE
        </p>
        <p className={styles.curvyTextSmall}>ALBERT EINSTEIN</p>

        
        <div >
          {nodes.map((node) => (
            <div className={styles.mindmapInput} key={node.id} >
              <input
                className={node.category === "opposto" ? styles.mindmapInputOpposite : node.category === "conseguenza" ? styles.mindmapInputSequence : styles.mindmapInputEquivalent}
                type="text"
                placeholder={node.input}
                onChange={(e) => handleInputChange(e, node.id)}
              />
              {/* <button className={styles.addBtn} onClick={() => handleAddNode(node.id)}>
                <AiFillPlusCircle />
              </button> */}
              <button className={styles.removeBtn} onClick={() => handleDeleteNode(node.id)}>
                <FaTrash />
              </button>
            </div>
          ))}
          <div className={styles.btnContainer}>
            <button className={styles.addBtnOpposite} onClick={() => addNode("opposto")} >
              OPPOSTO
              <BsPlus className={styles.plusIcon} />
            </button>
            <button className={styles.addBtnSequence} onClick={() => addNode("conseguenza")}>
              CONSEGUENZA
              <BsPlus className={styles.plusIcon} />
            </button>
            <button className={styles.addBtnEquivalent} onClick={() => addNode("equivalenza")}>
              EQUIVALENZA
              <BsPlus className={styles.plusIcon} />
            </button>
          </div>
        </div>
        <Image alt="Logo Vast" className={styles.logo} src={logo} width={188} height={64}></Image>
      </motion.div>
    );
}

export default Mindmap