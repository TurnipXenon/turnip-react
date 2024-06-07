# Learnings

## References

- https://github.com/vercel/next.js/tree/canary/examples/with-docker
  - Copy pasted the docker config and it also has references about how to run the Dockerized NextJS app
- Run the dockerized app on port 80 for easier ECS deployment
  - https://medium.com/@srhise/deploying-next-js-on-aws-fargate-with-aws-cloud-development-kit-cdk-5b433257365c
  - They also have the same CDK file we want to use!
  - We change our mind. Something is up with new Fargate, that may not be allowing port 80. Let's see if reverting it back to 80 would work

