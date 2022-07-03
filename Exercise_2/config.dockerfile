FROM cypress/included:9.2.0
WORKDIR /app
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
RUN npx cypress run
