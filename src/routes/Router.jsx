import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import CreateGroup from "../pages/CreateGroup";
import Payments from "../pages/Payments";
import History from "../pages/History";
import Profile from "../pages/Profile";
import GroupDetails from "../pages/GroupDetails";

import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";


function Router() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Pages publiques */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />



        {/* Pages protégées */}


        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } />



        <Route path="/groups" element={
          <ProtectedRoute>
            <Layout>
              <Groups />
            </Layout>
          </ProtectedRoute>
        } />



        <Route path="/groups/:id" element={
          <ProtectedRoute>
            <Layout>
              <GroupDetails />
            </Layout>
          </ProtectedRoute>
        } />



        <Route path="/create-group" element={
          <ProtectedRoute>
            <Layout>
              <CreateGroup />
            </Layout>
          </ProtectedRoute>
        } />



        <Route path="/payments" element={
          <ProtectedRoute>
            <Layout>
              <Payments />
            </Layout>
          </ProtectedRoute>
        } />



        <Route path="/history" element={
          <ProtectedRoute>
            <Layout>
              <History />
            </Layout>
          </ProtectedRoute>
        } />



        <Route path="/profile" element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        } />



        {/* Route si paj la pa egziste */}

        <Route path="*" element={<Home />} />


      </Routes>


    </BrowserRouter>

  );

}


export default Router;