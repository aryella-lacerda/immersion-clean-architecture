# Immersion - Clean Architecture

The objective of this project is to practice Clean Architecture concepts.

# Takeaways

- A good architecture allows you to **delay making decisions** as long as possible.
- It's best to **encapsulate the layers of your architecture** as completely as possible.
  - For exmaple: try not to reuse entity types in your use cases. If you do, your presentation layer will have a window into (and a certain dependency on) your entity later when it uses the intermediate use-cases layer.
- In-memory repos are a good option for testing.
- Each entity has its repository, which is why the repos are in the Domain folder in this project. There should never be a repo for something other than an entity.

# Questions

- What about helper (non-enterprise?) types/objects like Coordinates? Can they be accessed by every layer? 🤔
