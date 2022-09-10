<script>
  import {onDestroy, onMount} from 'svelte'

  import Transition from './Transition.svelte'
  /** @type {{question: string, answer: string}[]} */
  export let qas = []
  let answer = ''
  let question = ''
  /** @type {ReturnType<setInterval>|null} */
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
    if (interval) clearInterval(interval)
  })
  /** @type {(qa: {question: string, answer: string}, stopAuto: boolean) => any} */
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
        <p class="answer" on:scroll={() => questionClicked({question, answer}, true)}>
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
