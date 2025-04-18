import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './homescreen/homescreen';
import LoginPage from './loginpage/login';
import SignupForm from './signup/signup';
import HomeScreen2 from './homescreen2/homescreen2';
import Home from './home/home';
import Companies from './companies/companies.js';
import Dashboard from './dashboard/profile.js';
import Jobs from './jobs/jobs.js';

export default function App(){
  return (
    <Router>
      <main className='job-platform'>
        <Routes><Route path='/' element={<HomeScreen/>}exact/></Routes>
        <Routes><Route path='/login' element={<LoginPage/>}exact/></Routes>
        <Routes><Route path='/signup' element={<SignupForm/>}exact/></Routes>
        <Routes><Route path='/homeScreen2' element={<HomeScreen2/>}exact/></Routes>
        <Routes><Route path='/home' element={<Home/>}exact/></Routes>
        <Routes><Route path='/companies' element={<Companies/>}exact/></Routes>
        <Routes><Route path='/profile' element={<Dashboard/>}exact/></Routes> 
        <Routes><Route path='/jobs' element={<Jobs/>}exact/></Routes> 
      </main>
    </Router> 
  );
  }


