const Faq = () => {
  return (
    <div id="faq" className="px-2 md:px-16 py-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-bold pb-3">Frequently asked Questions</h1>
        <p className="text-center lg:text-xl pb-6">Get answers to your questions from our FAQs</p>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
        Can I try task management in Asana for free?
        </div>
        <div className="collapse-content">
          <p>Yes</p>
        </div>
      </div>
      
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What is task management?
        </div>
        <div className="collapse-content">
          <p>Task management is more than a to-do list. It means tracking tasks from beginning to end, delegating subtasks to teammates, and setting deadlines to make sure projects get done on time. Task management software, like Asana, empowers teams to work more productively and efficiently.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What is task management?
        </div>
        <div className="collapse-content">
          <p>Task management is more than a to-do list. It means tracking tasks from beginning to end, delegating subtasks to teammates, and setting deadlines to make sure projects get done on time. Task management software, like Asana, empowers teams to work more productively and efficiently.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What does task management software do?
        </div>
        <div className="collapse-content">
          <p>Do you waste time organizing sticky notes, searching your email, or writing to-do lists? Luckily, Asana can help. Prioritize tasks, manage time more effectively, hit deadlines—all in one task manager tool.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What are subtasks?
        </div>
        <div className="collapse-content">
          <p>Subtasks help you break the work of a task into smaller parts in order to divide up the work among multiple people. For example, a “blog post” task has several parts. One person needs to write the blog, another needs to review it, and so on. In this case, each individual component would be its own subtask, assigned to the person responsible for completing it. All subtasks are housed within a parent task—the blog post task—making it easy for stakeholders to stay connected to the overarching context of their work.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Faq;
