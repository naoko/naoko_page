naoko_page
==========

how to run:

    $ cd naoko_page
    $ grunt serve

how to deploy:

    $ cd ansible_play
    $ ansible-playbook -c paramiko --private-key ~/.ssh/naoko-ec2.pem -i hosts/hosts_aws playbook/web.yml
