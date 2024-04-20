/* eslint-disable react/no-unescaped-entities */
const AskQuestion = () => {
  return (
    <div className="bg-green-900">
      <div className="max-w-7xl mx-auto p-10">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-green-100">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-white text-xl font-medium">
              How often should I water my indoor plants?
            </div>
            <div className="collapse-content text-green-100">
              <p>
                The frequency of watering indoor plants depends on various
                factors such as the type of plant, the size of the pot, the
                environmental conditions, and the season. Generally, it's
                recommended to water indoor plants when the top inch of soil
                feels dry to the touch. Overwatering can lead to root rot, so
                it's important to allow the soil to dry out between waterings
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-green-100">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-white text-xl font-medium">
              What is the best way to fertilize my plants?
            </div>
            <div className="collapse-content text-green-100">
              <p>
                Fertilizing indoor plants is essential for providing them with
                essential nutrients for growth. It's best to use a balanced
                liquid fertilizer diluted to half-strength and apply it during
                the growing season (spring and summer) every 2-4 weeks. Be
                careful not to over-fertilize, as this can damage the roots of
                the plants.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-green-100">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-white text-xl font-medium">
              How can I prevent pests from infesting my plants?{" "}
            </div>
            <div className="collapse-content text-green-100">
              <p>Preventing pests from infesting indoor plants involves maintaining good plant hygiene and keeping an eye out for any signs of pest infestation. Regularly inspect your plants for pests such as aphids, mealybugs, spider mites, and scale insects. If you notice any pests, isolate the affected plant and treat it with insecticidal soap or neem oil. Additionally, avoid overwatering and ensure proper air circulation around your plants to discourage pest infestations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
