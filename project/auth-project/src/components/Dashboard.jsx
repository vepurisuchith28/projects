import React from 'react';
import { LogOut, BarChart3, Users, Settings, Activity, Mail, User } from 'lucide-react';

export const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-95">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-500">
                Welcome back, {user?.user_metadata?.name || user?.email || 'User'}!
              </p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <Users className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-3xl font-bold">2,543</p>
            <p className="text-sm opacity-80 mt-2">↑ 12% from last month</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Activity</h3>
              <BarChart3 className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-3xl font-bold">8,432</p>
            <p className="text-sm opacity-80 mt-2">↑ 23% from last week</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Settings</h3>
              <Settings className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-3xl font-bold">16</p>
            <p className="text-sm opacity-80 mt-2">Active configurations</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Account Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
              <Mail className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
              <User className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium text-gray-800">
                  {user?.user_metadata?.name || 'Not provided'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
              <Activity className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-medium text-gray-800 text-xs break-all">{user?.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};