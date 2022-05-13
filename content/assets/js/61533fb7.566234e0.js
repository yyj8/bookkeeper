"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[4966],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,h=d["".concat(i,".").concat(k)]||d[k]||c[k]||r;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],s={id:"kubernetes",title:"Deploying Apache BookKeeper on Kubernetes"},i=void 0,p={unversionedId:"deployment/kubernetes",id:"version-4.14.5/deployment/kubernetes",title:"Deploying Apache BookKeeper on Kubernetes",description:"Apache BookKeeper can be easily deployed in Kubernetes clusters. The managed clusters on Google Container Engine is the most convenient way.",source:"@site/versioned_docs/version-4.14.5/deployment/kubernetes.md",sourceDirName:"deployment",slug:"/deployment/kubernetes",permalink:"/docs/4.14.5/deployment/kubernetes",tags:[],version:"4.14.5",frontMatter:{id:"kubernetes",title:"Deploying Apache BookKeeper on Kubernetes"},sidebar:"version-4.14.5/docsSidebar",previous:{title:"Deploying BookKeeper on DC/OS",permalink:"/docs/4.14.5/deployment/dcos"},next:{title:"BookKeeper administration",permalink:"/docs/4.14.5/admin/bookies"}},u={},c=[{value:"Setup on Google Container Engine",id:"setup-on-google-container-engine",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create a new Kubernetes cluster",id:"create-a-new-kubernetes-cluster",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"ZooKeeper",id:"zookeeper",level:3},{value:"Deploy Bookies",id:"deploy-bookies",level:3},{value:"Un-Deploy",id:"un-deploy",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache BookKeeper can be easily deployed in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," clusters. The managed clusters on ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/"},"Google Container Engine")," is the most convenient way."),(0,r.kt)("p",null,"The deployment method shown in this guide relies on ",(0,r.kt)("a",{parentName:"p",href:"http://yaml.org/"},"YAML")," definitions for Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/resources-reference/v1.6/"},"resources"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper/tree/master/deploy/kubernetes"},(0,r.kt)("inlineCode",{parentName:"a"},"kubernetes"))," subdirectory holds resource definitions for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A three-node ZooKeeper cluster"),(0,r.kt)("li",{parentName:"ul"},"A BookKeeper cluster with a bookie runs on each node.")),(0,r.kt)("h2",{id:"setup-on-google-container-engine"},"Setup on Google Container Engine"),(0,r.kt)("p",null,"To get started, get source code of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper/tree/master/deploy/kubernetes"},(0,r.kt)("inlineCode",{parentName:"a"},"kubernetes"))," from github by git clone."),(0,r.kt)("p",null,"If you'd like to change the number of bookies,  or ZooKeeper nodes in your BookKeeper cluster, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"replicas")," parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," section of the appropriate ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},(0,r.kt)("inlineCode",{parentName:"a"},"Deployment"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},(0,r.kt)("inlineCode",{parentName:"a"},"StatefulSet"))," resource."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/container-engine"},"Google Container Engine")," (GKE) automates the creation and management of Kubernetes clusters in ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/"},"Google Compute Engine")," (GCE)."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Google Cloud Platform account, which you can sign up for at ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com"},"cloud.google.com")),(0,r.kt)("li",{parentName:"ul"},"An existing Cloud Platform project"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/downloads"},"Google Cloud SDK")," (in particular the ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/gcloud/"},(0,r.kt)("inlineCode",{parentName:"a"},"gcloud"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},(0,r.kt)("inlineCode",{parentName:"a"},"kubectl"))," tools).")),(0,r.kt)("h3",{id:"create-a-new-kubernetes-cluster"},"Create a new Kubernetes cluster"),(0,r.kt)("p",null,"You can create a new GKE cluster using the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/container/clusters/create"},(0,r.kt)("inlineCode",{parentName:"a"},"container clusters create"))," command for ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud"),". This command enables you to specify the number of nodes in the cluster, the machine types of those nodes, and more."),(0,r.kt)("p",null,"As an example, we'll create a new GKE cluster for Kubernetes version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG.md#v164"},"1.6.4")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones/regions-zones#available"},"us-central1-a")," zone. The cluster will be named ",(0,r.kt)("inlineCode",{parentName:"p"},"bookkeeper-gke-cluster")," and will consist of three VMs, each using two locally attached SSDs and running on ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/machine-types"},"n1-standard-8")," machines. These SSDs will be used by Bookie instances, one for the BookKeeper journal and the other for storing the actual data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcloud config set compute/zone us-central1-a\n$ gcloud config set project your-project-name\n$ gcloud container clusters create bookkeeper-gke-cluster \\\n  --machine-type=n1-standard-8 \\\n  --num-nodes=3 \\\n  --local-ssd-count=2 \\\n  --enable-kubernetes-alpha\n")),(0,r.kt)("p",null,"By default, bookies will run on all the machines that have locally attached SSD disks. In this example, all of those machines will have two SSDs, but you can add different types of machines to the cluster later. You can control which machines host bookie servers using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels"},"labels"),"."),(0,r.kt)("h3",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"You can observe your cluster in the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes Dashboard")," by downloading the credentials for your Kubernetes cluster and opening up a proxy to the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcloud container clusters get-credentials bookkeeper-gke-cluster \\\n  --zone=us-central1-a \\\n  --project=your-project-name\n$ kubectl proxy\n")),(0,r.kt)("p",null,"By default, the proxy will be opened on port 8001. Now you can navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8001/ui"},"localhost:8001/ui")," in your browser to access the dashboard. At first your GKE cluster will be empty, but that will change as you begin deploying."),(0,r.kt)("p",null,"When you create a cluster, your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," config in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," (on MacOS and Linux) will be updated for you, so you probably won't need to change your configuration. Nonetheless, you can ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," can interact with your cluster by listing the nodes in the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," is working with your cluster, you can proceed to deploy ZooKeeper and Bookies."),(0,r.kt)("h3",{id:"zookeeper"},"ZooKeeper"),(0,r.kt)("p",null,"You ",(0,r.kt)("em",{parentName:"p"},"must")," deploy ZooKeeper as the first component, as it is a dependency for the others."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f zookeeper.yaml\n")),(0,r.kt)("p",null,"Wait until all three ZooKeeper server pods are up and have the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),". You can check on the status of the ZooKeeper pods at any time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -l component=zookeeper\nNAME      READY     STATUS             RESTARTS   AGE\nzk-0      1/1       Running            0          18m\nzk-1      1/1       Running            0          17m\nzk-2      0/1       Running            6          15m\n")),(0,r.kt)("p",null,"This step may take several minutes, as Kubernetes needs to download the Docker image on the VMs."),(0,r.kt)("p",null,"If you want to connect to one of the remote zookeeper server, you can use",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rgs1/zk_shell"},"zk-shell"),", you need to forward a local port to the\nremote zookeeper server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl port-forward zk-0 2181:2181\n$ zk-shell localhost 2181\n")),(0,r.kt)("h3",{id:"deploy-bookies"},"Deploy Bookies"),(0,r.kt)("p",null,"Once ZooKeeper cluster is Running, you can then deploy the bookies. You can deploy the bookies either using a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," or a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: ",(0,r.kt)("em",{parentName:"p"},"DaemonSet")," vs ",(0,r.kt)("em",{parentName:"p"},"StatefulSet")),(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("em",{parentName:"p"},"DaemonSet")," ensures that all (or some) nodes run a pod of bookie instance. As nodes are added to the cluster, bookie pods are added automatically to them. As nodes are removed from the\ncluster, those bookie pods are garbage collected. The bookies deployed in a DaemonSet stores data on the local disks on those nodes. So it doesn't require any external storage for Persistent\nVolumes."),(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("em",{parentName:"p"},"StatefulSet")," maintains a sticky identity for the pods that it runs and manages. It provides stable and unique network identifiers, and stable and persistent storage for each pod. The pods\nare not interchangeable, the idenifiers for each pod are maintained across any rescheduling."),(0,r.kt)("p",{parentName:"blockquote"},"Which one to use? A ",(0,r.kt)("em",{parentName:"p"},"DaemonSet")," is the easiest way to deploy a bookkeeper cluster, because it doesn't require additional persistent volume provisioner and use local disks. BookKeeper manages\nthe data replication. It maintains the best latency property. However, it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"hostIP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPort")," for communications between pods. In some k8s platform (such as DC/OS), ",(0,r.kt)("inlineCode",{parentName:"p"},"hostIP")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"hostPort")," are not well supported. A ",(0,r.kt)("em",{parentName:"p"},"StatefulSet")," is only practical when deploying in a cloud environment or any K8S installation that has persistent volumes available. Also be aware, latency\ncan be potentially higher when using persistent volumes, because there is usually built-in replication in the persistent volumes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# deploy bookies in a daemon set\n$ kubectl apply -f bookkeeper.yaml\n\n# deploy bookies in a stateful set\n$ kubectl apply -f bookkeeper.stateful.yaml\n")),(0,r.kt)("p",null,"You can check on the status of the Bookie pods for these components either in the Kubernetes Dashboard or using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods\n")),(0,r.kt)("p",null,"While all BookKeeper pods is Running, by zk-shell you could find all available bookies under /ledgers/"),(0,r.kt)("p",null,"You could also run a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ivankelly/bookkeeper-tutorial/"},"bookkeeper tutorial")," instance, which named as 'dice' here, in this bookkeeper cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$\ufeffkubectl run -i --tty --attach dice --image=caiok/bookkeeper-tutorial --env ZOOKEEPER_SERVERS="zk-0.zookeeper"\n')),(0,r.kt)("p",null,"An example output of Dice instance is like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-aidl"},'\u279c $ kubectl run -i --tty --attach dice --image=caiok/bookkeeper-tutorial --env ZOOKEEPER_SERVERS="zk-0.zookeeper"          \nIf you don\'t see a command prompt, try pressing enter.\nValue = 1, epoch = 5, leading\nValue = 2, epoch = 5, leading\nValue = 1, epoch = 5, leading\nValue = 4, epoch = 5, leading\nValue = 5, epoch = 5, leading\nValue = 4, epoch = 5, leading\nValue = 3, epoch = 5, leading\nValue = 5, epoch = 5, leading\nValue = 3, epoch = 5, leading\nValue = 2, epoch = 5, leading\nValue = 1, epoch = 5, leading\nValue = 4, epoch = 5, leading\nValue = 2, epoch = 5, leading\n')),(0,r.kt)("h3",{id:"un-deploy"},"Un-Deploy"),(0,r.kt)("p",null,"Delete Demo dice instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$\ufeffkubectl delete deployment dice      \n")),(0,r.kt)("p",null,"Delete BookKeeper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl delete -f bookkeeper.yaml    \n")),(0,r.kt)("p",null,"Delete ZooKeeper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl delete -f zookeeper.yaml    \n")),(0,r.kt)("p",null,"Delete cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcloud container clusters delete bookkeeper-gke-cluster    \n")))}k.isMDXComponent=!0}}]);