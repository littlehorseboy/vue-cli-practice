<template>
  <div>

    <Navbar>
      <!-- slot -->
      <template slot="right">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </template>
    </Navbar>

    <main role="main">
      <Jumbotron></Jumbotron>
      <Container :list="list"></Container>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
// import Hello from './Hello';

export default {
  data() {
    return {
      list: [
        {
          title: 'LLL',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »',
        },
        {
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »',
        },
        {
          title: 'Heading',
          info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »',
        },
      ],
    };
  },
  components: {
    Navbar,
    Jumbotron,
    Container,
  },
};
</script>

<style>
  body {
    padding-top: 3.5rem;
  }
</style>
