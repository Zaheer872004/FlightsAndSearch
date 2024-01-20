




same airplane but difference flights.


## DB Design
 - Airplane Table
 - Flight
 - Airport
 - City

## Airplane Table
 - Id
 - Model_number
 - capacity
 - created_at
 - updated_at

## Flight
 - id
 - airport_id
 - src_airport_id
 - dest_airport_id
 - departure_date
 - arrival_date
 - departure_time
 - arrival_time

## City
 - id
 - name

## Airport
 - id
 - name
 - city_id
 - address

## Relation between them (ER-Diagram)-(1:N & N:1 & N:N)
 - 1:N on airplane to Flights
 - 1:N City to Airport (In one city might be have many airport).
 - 1:N Airport to Flight.



## Flight Table

- id - unique id to identify the flights