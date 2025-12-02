# my-quarkus-app

A cool quarkus app

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```shell script
./mvnw compile quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at http://localhost:8080/q/dev/.

## Packaging and running the application

The application can be packaged using:

```shell script
./mvnw package
```

It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:

```shell script
./mvnw package -Dquarkus.package.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable

You can create a native executable using:

```shell script
./mvnw package -Pnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:

```shell script
./mvnw package -Pnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/quarkus-app-1.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/maven-tooling.

## Generating Documentation

The documentation for this project is located in the `docs/` directory and uses TechDocs (Backstage). To generate the documentation site, use the TechDocs CLI:

```shell script
techdocs-cli generate --no-docker
```

This command will:
- Generate the documentation site from the Markdown files in `docs/`
- Use the configuration in `mkdocs.yaml`
- Output the generated site in the `site/` directory

The `--no-docker` flag ensures the generation runs without Docker, using local Python and MkDocs installation.

### Prerequisites

Before running the command, make sure you have the following installed:

1. **techdocs-cli**: The TechDocs CLI tool
2. **mkdocs**: Install with `pip3 install mkdocs mkdocs-techdocs-core --user`

> **_NOTE:_** The documentation configuration is defined in `mkdocs.yaml` and the source files are in the `docs/` directory. After generation, you can view the documentation by opening `site/index.html` in a web browser.

## Converting AsciiDoc to Markdown

This project includes a script to convert AsciiDoc files (`.adoc`) to Markdown format (`.md`). This is useful for converting documentation files.

### Installation

First, install the required dependencies:

```shell script
npm install --save-dev @asciidoctor/core turndown
```

This installs:
- **@asciidoctor/core**: AsciiDoc processor for JavaScript/Node.js
- **turndown**: HTML to Markdown converter

### Usage

To convert an AsciiDoc file to Markdown, use the conversion script:

```shell script
node convert-adoc-to-md.js
```

This script will:
- Read the `docs/README.adoc` file
- Convert it from AsciiDoc to HTML using asciidoctor.js
- Convert the HTML to Markdown using turndown
- Save the result as `docs/README.md`

> **_NOTE:_** The script is configured to convert `docs/README.adoc` to `docs/README.md`. You can modify the script to convert other AsciiDoc files as needed.

## Related Guides

- Hibernate ORM with Panache ([guide](https://quarkus.io/guides/hibernate-orm-panache)): Simplify your persistence code
  for Hibernate ORM via the active record or the repository pattern
- RESTEasy Classic ([guide](https://quarkus.io/guides/resteasy)): REST endpoint framework implementing JAX-RS and more

## Provided Code

### RESTEasy JAX-RS

Easily start your RESTful Web Services

[Related guide section...](https://quarkus.io/guides/getting-started#the-jax-rs-resources)
