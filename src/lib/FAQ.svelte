<script>
  import {onDestroy, onMount} from 'svelte'

  import Transition from './Transition.svelte'
  export let qas = [
    {
      question: 'Do we choose our outfits?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, delectus!'
    },
    {
      question: 'What locations can I pick?',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam incidunt sit dolorum dolore excepturi ipsum! Expedita eaque ipsum quod id, distinctio illum eius excepturi cumque eligendi quos nihil veritatis architecto pariatur exercitationem quisquam minus provident odio. Officia, dolorum nostrum atque, in expedita praesentium ad quia amet beatae laborum provident est.'
    },
    {
      question: 'Do you have payment plans?',
      answer: 'Lorem ipsum dolor sit amet.'
    },
    {
      question: 'Do you travel?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptatum alias natus quas sunt veritatis. Laborum sapiente aut harum, corporis blanditiis nihil architecto fuga eligendi aliquam nesciunt dignissimos quaerat quae vero soluta asperiores tenetur doloribus dolore enim reprehenderit. Beatae ullam minima ipsam odit repudiandae, optio obcaecati perspiciatis eum omnis architecto enim laboriosam voluptatum officiis quidem officia quibusdam. Vero beatae adipisci ipsum molestiae autem tenetur voluptatibus cupiditate, sint perferendis labore vitae tempore eaque sed iure nisi eius, sapiente provident ullam officiis. Expedita, esse. Hic odio, mollitia voluptatem aspernatur aliquam quas, fuga optio itaque tempore nobis, at quam atque sequi voluptates? Adipisci, aliquid? Magnam in voluptas distinctio, incidunt saepe aut itaque sunt officia consequatur! Quaerat consequuntur ea iure quo aliquid, eveniet in distinctio corporis? Officiis ex voluptas sed consectetur. Facilis, sint delectus praesentium ipsum a reiciendis asperiores ab voluptate vitae aspernatur ex harum cupiditate numquam enim laudantium blanditiis fugit consequatur consectetur minus illo incidunt laboriosam. Sapiente fugit minima dolorum magnam corporis accusamus sit, earum dolore cupiditate alias eaque aspernatur laboriosam nulla dolor aliquam vero ut, eum hic voluptatem vel incidunt optio. Nobis magni nam, deserunt earum dignissimos molestiae pariatur esse praesentium nihil architecto beatae similique dolorem, vitae maxime. Nisi dolorem odio corporis corrupti possimus voluptatum et, cumque, necessitatibus eos assumenda sequi voluptates, facilis beatae asperiores. Neque sit tempora quod labore delectus reiciendis tenetur eaque eos cum asperiores sed, eligendi voluptas, vitae rem eveniet quibusdam accusantium molestias nisi quas nihil quasi a, molestiae amet. Earum, voluptatum! Id reiciendis nulla et odio, quod necessitatibus explicabo officiis soluta distinctio blanditiis placeat voluptas tempore dolores in reprehenderit sit. Unde mollitia magni numquam fugiat, dolore amet incidunt officia! Veritatis incidunt distinctio ea quis recusandae deserunt quibusdam? Laborum molestiae atque tenetur sit, officiis molestias. Porro perspiciatis atque soluta, nisi explicabo ipsa magni omnis est inventore error officiis excepturi tempora. Rem dolore alias doloremque assumenda perspiciatis necessitatibus mollitia non tempore et corrupti voluptas placeat vitae voluptates veniam minus distinctio earum, nam cumque. Voluptate natus corrupti quasi cum maxime voluptatibus rerum nesciunt fuga amet tenetur ipsa dolorum mollitia, sint quidem et suscipit a nobis neque qui eos, cumque aliquid, itaque aut iure. Accusantium harum placeat at ullam culpa omnis suscipit architecto alias. Nulla omnis, ullam vel numquam fugiat repellendus laboriosam tempora architecto incidunt enim iure labore quidem eum repudiandae perferendis nemo deleniti veniam laudantium blanditiis, rerum voluptate cupiditate velit obcaecati sequi! Optio, ullam. Dolore, quisquam ea? Ut molestias esse reiciendis ratione error placeat harum est! At illum possimus maxime quibusdam saepe eveniet iste, earum doloribus modi inventore reprehenderit recusandae doloremque delectus quisquam ipsam error. Temporibus sit facere laboriosam quos? Praesentium molestiae corporis nostrum, vitae obcaecati, placeat dolores ut fuga quibusdam eveniet a incidunt aspernatur dicta sit optio voluptatem enim molestias quo, voluptates veniam quisquam reiciendis? Tenetur nobis vero corrupti? Ipsam obcaecati, nesciunt sequi deleniti quo necessitatibus facilis doloremque, inventore quaerat optio, a soluta blanditiis libero temporibus quis sint voluptatum? Quod dolorem eveniet iure saepe commodi sed, quas repellendus atque porro cumque praesentium totam. Vero assumenda, veritatis ex excepturi et maiores?'
    }
  ]
  let answer = ''
  let question = ''
  let interval
  onMount(() => {
    let qa = qas[Math.floor(Math.random() * qas.length)]
    questionClicked(qa, false)
    interval = setInterval(() => {
      let qa = qas[Math.floor(Math.random() * qas.length)]
      questionClicked(qa, false)
    }, 10000)
  })
  onDestroy(() => {
    clearInterval(interval)
  })
  function questionClicked(qa, stopAuto = false) {
    answer = qa.answer
    question = qa.question
    if (stopAuto && interval) {
      clearInterval(interval)
      interval = null
    }
  }
</script>

<section>
  <div>
    <h3>FAQ</h3>
    <h4>Frequently Asked <br /> Questions</h4>
    <div class="questions">
      {#each qas as qa}
        <button on:click={questionClicked(qa, true)} class:active={question === qa.question}>
          {qa.question}
        </button>
      {/each}
    </div>
    {#if answer}
      <Transition url={answer}>
        <p class="answer" on:scroll={() => questionClicked({q: question, a: answer}, true)}>
          {answer}
        </p>
      </Transition>
    {/if}
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    background: var(--light);
    box-shadow: var(--shadow-inset);
    color: var(--dark);
    margin-bottom: var(--space-2);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .active {
    font-weight: bold;
    text-decoration: underline;
  }

  section > div {
    max-width: var(--content-max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .questions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
  }

  h3 {
    text-align: center;
    font-size: var(--font-larger);
    margin-top: var(--space-4);
    font-weight: bold;
  }
  h4 {
    text-align: center;
    font-size: var(--font-normal);
    margin-bottom: var(--space-2);
    color: var(--dark-50);
  }

  .answer {
    text-align: center;
    margin-top: var(--space-2);
    margin-bottom: var(--space-2);
    padding: var(--space-2);

    max-width: var(--space-20);

    height: 100px;

    overflow-y: auto;
  }

  @media (min-width: 768px) {
  }
</style>
