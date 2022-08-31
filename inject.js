window.addEventListener('DOMContentLoaded', () => {
    const ad1Container = document.getElementById('ad1Container');
    const ad2Container = document.getElementById('ad2Container');

    const adUnit1Code = `
    <div id="inject.lt_300x250_above_content_1" style="width: 300px; height: 250px; background-color: blue">
      <script>
        const self = document.getElementById('inject.lt_300x250_above_content_1');
        self.innerHTML = '<h3>This is ad 1</h3>';
      </script>
    </div>`;
    
    const adUnit2Code = `
      <div id="inject.lt_300x250_above_content_2" style="width: 300px; height: 250px; background-color: green">
        <script>
          const self = document.getElementById('inject.lt_300x250_above_content_2');
          self.innerHTML = '<h3>This is ad 2</h3>';
        </script>
      </div>`;

      // const adUnit2Code = `
      // <div style="display: flex; flex-direction: column; gap: 30px">
      //   <div id="random_shit" style="width: 300px; height: 250px; background-color: yellow"></div>
      //   <div id="inject.lt_300x250_above_content_2" style="width: 300px; height: 250px; background-color: green">
      //     <script>
      //       const self = document.getElementById('inject.lt_300x250_above_content_2');
      //       self.innerHTML = '<h3>This is ad 2</h3>';
      //     </script>
      //   </div>
      // </div>`;
      
      ad1Container.innerHTML = adUnit1Code;
      ad2Container.innerHTML = adUnit2Code;
})
