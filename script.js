document.addEventListener("DOMContentLoaded", function () {
  // Get the elements representing pricing plans
  const plans = document.querySelectorAll('.card-deck .card');
  const slider = document.getElementById('userSlider');
  const userCount = document.getElementById('userCount');
  const orderModal = document.getElementById('orderModal');
  const closeModalButton = document.querySelector('.close');
  
  // Function to highlight the pricing plan based on the slider value
  function highlightPricingPlan() {
    const users = parseInt(slider.value);
    plans.forEach((plan, index) => {
      plan.classList.remove('highlighted');
    });

    let planIndex = Math.floor(users / 10); // Assuming each plan represents a range of 10 users
    if (planIndex > 2) {
      planIndex = 2;
    }
    if (planIndex >= 0 && planIndex < plans.length) {
      plans[planIndex].classList.add('highlighted');
    }
  }

  // Function to open the order modal
  function openOrderModal() {
    highlightPricingPlan();
    orderModal.classList.add('show');
    orderModal.style.display = 'block';
  }

  // Function to close the order modal
  function closeOrderModal() {
    orderModal.style.display = 'none';
  }

  // Add an event listener to the user slider
  slider.addEventListener('input', () => {
    // Update the user count display
    userCount.textContent = slider.value ;
    highlightPricingPlan();
  });

  // Add an event listener to each pricing plan button to open the order modal
  plans.forEach((plan) => {
    const button = plan.querySelector('button');
    button.addEventListener('click', openOrderModal);
  });

  // Add an event listener to the close button to close the order modal
  closeModalButton.addEventListener('click', closeOrderModal);

});
