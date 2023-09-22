import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TestPDF from "../components/TestPDF";
//Contextos
import { TestContext } from "../context/TestContext";

export function Resultado() {
  const navigate = useNavigate();

  return (
      <div style={{ width: '100%', height: '100vh', overflow:'hidden'}}>
      <TestPDF />
      </div>
  );
}
