# Proyecto de Sistema Bancario Social

Este proyecto es una API REST desarrollada en Node.js con Express y Sequelize para gestionar un sistema bancario social. Permite la gestión de usuarios, cuentas de ahorro, cuentas de préstamos y cooperativas entre usuarios.

## Instalación

1. Clona el repositorio:
   git clone https://github.com/Ecduar/Actividad---e-actividad-2.1.git
   cd Actividad---e-actividad-2.1.git
   npm install para instalar las dependencias
   npm run dev para inciar el proyecto


2. Crear un archivo en la raiz .env y colocarle las siguientes variables:
    DB_NAME=actividad2
    DB_USER=root
    DB_PASS=
    DB_HOST=localhost
    PORT=3000

3. Endpoints Disponibles
Usuarios
    /api/users (POST, GET, PUT, DELETE)
    /api/users/:id (GET, DELETE)
Cuentas de Ahorro
    /api/saving-accounts (POST, GET, PUT, DELETE)
    /api/saving-accounts/:id (GET, DELETE)
Cuentas de Préstamos
    /api/loan-accounts (POST, GET, PUT, DELETE)
    /api/loan-accounts/:id (GET, DELETE)
Cooperativas
    /api/cooperatives (POST, GET, PUT, DELETE)
    /api/cooperatives/:id (GET, DELETE)

4. Participantes del Backend
Ecduar Enrique Estrada Nieto - C.I: 29718294
Gustavo Andrés Méndez chacín - C.I: 30860474
