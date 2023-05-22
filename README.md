
# Vue eCommerce with Docker & Laravel

A modern, robust, and scalable eCommerce platform built using Vue.js, Laravel, and Docker. This project is designed to provide a seamless online shopping experience with a highly responsive and customizable user interface, backed by a powerful and flexible Laravel API.

## Features

- Vue.js for front-end development, providing a rich and dynamic user experience
- Laravel for the back-end API, ensuring a solid foundation for your eCommerce platform
- Docker for easy setup, deployment, and scalability
- Responsive design that works across devices and screen sizes
- Secure authentication and user management
- Product catalog management, including categories, filters, and search
- Shopping cart and checkout flow
- Payment gateway integration
- Order management and tracking

## Prerequisites

- Node.js (v14.x or higher)
- Yarn (v1.22.x or higher)
- PHP (v7.4.x or higher)
- Composer (v2.x or higher)
- Docker (v20.10.x or higher) and Docker Compose (v1.29.x or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vue-ecommerce-with-docker-laravel.git
   ```

2. Navigate to the project directory:
   ```
   cd vue-ecommerce-with-docker-laravel
   ```

3. Install front-end dependencies:
   ```
   yarn install
   ```

4. Install back-end dependencies:
   ```
   composer install
   ```

5. Build and run Docker containers:
   ```
   docker-compose up -d
   ```

6. Create a copy of the .env.example file and name it .env:
   ```
   cp .env.example .env
   ```

7. Generate an app key for Laravel:
   ```
   docker-compose exec app php artisan key:generate
   ```

8. Migrate and seed the database:
   ```
   docker-compose exec app php artisan migrate --seed
   ```

9. Build and serve the front-end application:
   ```
   yarn serve
   ```

10. Open your browser and visit http://localhost:8080 to access the application.

## Documentation

Detailed documentation on how to use and customize this eCommerce platform can be found in the `docs` directory.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.