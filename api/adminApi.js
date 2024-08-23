const express = require('express');
const adminService = require('../service/adminService');
const adminApi = express.Router();

adminApi.post('/admin/login', adminService.loginAdminService);

adminApi.post('/admin/logout', adminService.logoutAdminService);

module.exports = adminApi;