## Fulcrum Engineering Hub

Welcome to the Fulcrum Engineering Hub GitHub repository. Fulcrum Engineering Hub is a dynamic web platform designed to enhance engagement and productivity within engineering teams. This platform serves as a centralized repository where team members can publish and access the latest documentation, technical blog posts, and project updates.

### Key Features

- **AI-Generated Content**: The platform leverages AI to generate insightful summaries, witty titles, and fun TL;DR sections, making content more engaging and accessible.
- **Interaction and Visibility**: A like system fosters interaction and increases the visibility of new content, ensuring that all engineering documentation is automatically published and promoted within the organization.
- **Powerful Search Functionality**: One of the most important features of Fulcrum Engineering Hub is its robust search functionality, enabling users to search across all internally indexed information. This helps engineering teams find the right information quickly and easily in a single place, streamlining their workflow and improving efficiency.
- **Centralized Repository**: Acts as a one-stop shop for all engineering documentation, driving collaboration and knowledge sharing within the team.

Fulcrum Engineering Hub aims to boost both writing and reading activities among engineers, fostering a culture of continuous learning and innovation.

### Getting Started

### Steps to Run the Rails Application

1. **Build and Run Containers**:
    ```sh
    docker-compose up --build
    ```

2. **Install Gems**:
    ```sh
    docker-compose run web bundle install
    ```

3. **Create and Migrate Database**:
    ```sh
    docker-compose run web rails db:create db:migrate
    ```

4. **Access the Application**:
    - The Rails server will be accessible at `http://localhost:4000`.



### Contributing

We welcome contributions from the community! Please see our [contributing guidelines](link-to-contributing-guidelines) for more information on how to get involved.

### License

Fulcrum Engineering Hub is licensed under the [MIT License](link-to-license).

For more details, please refer to our [wiki](link-to-wiki).
