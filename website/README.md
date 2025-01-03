# Tally Fruit Trees

This is the website for the Tally Fruit Trees project.

## Database Schema

### tree_types

Stores the different types of fruit trees available.

| Column | Type    | Constraints      | Description                                      |
| ------ | ------- | ---------------- | ------------------------------------------------ |
| id     | SERIAL  | PRIMARY KEY      | Unique identifier for each tree type.            |
| name   | VARCHAR | UNIQUE, NOT NULL | Name of the tree type (e.g., "Apple", "Orange"). |

### property_types

Defines the classifications of properties where trees can be located.

| Column | Type    | Constraints      | Description                                                    |
| ------ | ------- | ---------------- | -------------------------------------------------------------- |
| id     | SERIAL  | PRIMARY KEY      | Unique identifier for each property type.                      |
| name   | VARCHAR | UNIQUE, NOT NULL | Name of the property type (e.g., "Residential", "Commercial"). |

### trees

Stores detailed information about each fruit tree, including its location, type, property classification, and additional attributes.

| Column         | Type         | Constraints                             | Description                                                                            |
| -------------- | ------------ | --------------------------------------- | -------------------------------------------------------------------------------------- |
| id             | SERIAL       | PRIMARY KEY                             | Unique identifier for each tree record.                                                |
| lat            | DECIMAL(9,6) | NOT NULL                                | Latitude coordinate of the tree's location.                                            |
| long           | DECIMAL(9,6) | NOT NULL                                | Longitude coordinate of the tree's location.                                           |
| type           | INTEGER      | NOT NULL, REFERENCES tree_types(id)     | Foreign key referencing the tree_types table, indicating the tree type.                |
| property_type  | INTEGER      | NOT NULL, REFERENCES property_types(id) | Foreign key referencing the property_types table, indicating the property type.        |
| public_picking | BOOLEAN      | DEFAULT NULL                            | Indicates if public picking is allowed (TRUE), not allowed (FALSE), or unknown (NULL). |
| notes          | TEXT         | DEFAULT NULL                            | Optional field for additional information about the tree.                              |
| approved       | BOOLEAN      | DEFAULT FALSE                           | Indicates if the tree record has been reviewed and approved.                           |
| created        | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP               | Timestamp when the tree record was created.                                            |
| last_updated   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP               | Timestamp when the tree record was last updated.                                       |

## fruiting_times

Stores the fruiting periods for each fruit type listed in the tree_types table. This table allows you to define the start and end months during which each fruit is typically ripe and ready for harvesting.

| Column       | Type    | Constraints                                    | Description                                                                                                          |
| ------------ | ------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| id           | SERIAL  | PRIMARY KEY                                    | Unique identifier for each fruiting time record.                                                                     |
| tree_type_id | INTEGER | NOT NULL, REFERENCES tree_types(id)            | Foreign key referencing the id column in the tree_types table, linking the fruiting period to a specific fruit type. |
| start_month  | INTEGER | NOT NULL, CHECK (start_month BETWEEN 1 AND 12) | The month when the fruiting period begins (1 = January, 12 = December).                                              |
| end_month    | INTEGER | NOT NULL, CHECK (end_month BETWEEN 1 AND 12)   | The month when the fruiting period ends (1 = January, 12 = December).                                                |
| description  | TEXT    | DEFAULT NULL                                   | Optional field for additional details about the fruiting period (e.g., "Early season", "Late harvest").              |

## Relationships and Constraints

- Foreign Keys:

  - The type column in the trees table references the id column in the tree_types table. This establishes a relationship between each tree and its corresponding type.
  - The property_type column in the trees table references the id column in the property_types table. This links each tree to its property classification.
  - The tree_type_id column establishes a relationship between the fruiting_times and tree_types tables, ensuring that each fruiting period is associated with a valid fruit type.

- Unique Constraints:

  - Both name columns in the tree_types and property_types tables are unique to prevent duplicate entries.

- Not Null Constraints:

  - Essential fields like lat, long, type, and property_type in the trees table are marked as NOT NULL to ensure that every tree record has the necessary information.

- Check Constraints:

  - start_month and end_month are constrained to values between 1 and 12 to represent valid months of the year.

## Summary

This schema setup ensures a robust and scalable database structure for managing fruit trees, their types, and property classifications. By adhering to these table definitions and relationships, you can maintain data integrity and facilitate efficient data operations within your application.

For any further assistance or questions regarding the database setup, feel free to reach out!
