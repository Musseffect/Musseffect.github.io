
import argparse



def convert(srcFilename,dstFilename):
    src = open(srcFilename,"r")
    dst = open(dstFilename,"w")
    srcLines = src.readlines()
    i = 0
    length = len(srcLines)
    dst.write("[\n")
    for x in srcLines:
        dst.write("\"")
        dst.write(x)
        dst.write("\"")
        i+=1
        if (i<length):
            dst.write(",\n")
            dst.write("\"\",\n")
    src.close()
    dst.close()


parser = argparse.ArgumentParser(description='text to markdown JSON array')
parser.add_argument('src',metavar='src',help='source filename',type=str)
parser.add_argument('dst',metavar='dst',help='destination filename',type=str)
args = parser.parse_args()
convert(args.src,args.dst)